package main

import (
	"fmt"
	r "github.com/dancannon/gorethink"
	"github.com/mitchellh/mapstructure"
	"time"
)

//iota: constant values are set automatically: 0,1,2,...
const (
	GameStop = iota
	UserStop
)

type User struct {
	Id   string `gorethink:"id,omitempty"`
	Name string `gorethink:"name"`
}

type Move struct {
	Id        string    `gorethink:"id,omitempty"`
	Row       int       `gorethink:"row"`
	Col       int       `gorethink:"col"`
	Value     int       `gorethink:"value"`
	CreatedAt time.Time `gorethink:"createdAt"`
	GameId    string    `gorethink:"gameId"`
}

func addMove(client *Client, data interface{}) {
	var move Move
	err := mapstructure.Decode(data, &move)
	if err != nil {
		client.send <- Message{"error", err.Error()}
		return
	}

	go func() {
		move.CreatedAt = time.Now()

		err := r.Table("games").
			Insert(move).
			Exec(client.session)
		if err != nil {
			client.send <- Message{"error", err.Error()}
		}
	}()
}

func subscribeGame(client *Client, data interface{}) {
	eventData := data.(map[string]interface{})
	val, ok := eventData["gameId"]
	if !ok {
		return
	}
	gameId, ok := val.(string)
	if !ok {
		return
	}

	fmt.Println("subscribe to game " + gameId)

	stop := client.NewStopChannel(GameStop)
	result := make(chan r.ChangeResponse)

	cursor, err := r.Table("games").
		OrderBy(r.OrderByOpts{Index: r.Desc("createdAt")}).
		Filter(r.Row.Field("gameId").Eq(gameId)).
		Changes(r.ChangesOpts{IncludeInitial: true}).
		Run(client.session)
	if err != nil {
		client.send <- Message{"error", err.Error()}
		return
	}

	go func() {
		var change r.ChangeResponse
		for cursor.Next(&change) {
			result <- change
		}
	}()

	go func() {
		for {
			select {
			case <-stop:
				cursor.Close()
				return
			case change := <-result:
				client.send <- Message{"move add", change.NewValue}
			}
		}
	}()
}
