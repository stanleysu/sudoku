package main

import (
	"fmt"
	r "github.com/dancannon/gorethink"
	"github.com/mitchellh/mapstructure"
)

//iota: constant values are set automatically: 0,1,2,...
const (
	GameStop = iota
	UserStop
)

type User struct {
	Name string `json:"name" gorethink:"name"`
}

type Move struct {
	Row   int `json:"row" gorethink:"row"`
	Col   int `json:"col" gorethink:"col"`
	Value int `json:"value" gorethink:"value"`
}

func addMove(client *Client, data interface{}) {
	var move Move
	err := mapstructure.Decode(data, &move)
	if err != nil {
		client.send <- Message{"error", err.Error()}
		return
	}

	go func() {
		err := r.Table("game").
			Insert(move).
			Exec(client.session)
		if err != nil {
			client.send <- Message{"error", err.Error()}
		}
	}()
}

func subscribeGame(client *Client, data interface{}) {
	fmt.Println("subscribe to game")
	stop := client.NewStopChannel(GameStop)
	result := make(chan r.ChangeResponse)

	cursor, err := r.Table("game").
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
				fmt.Println("send move add msg")
			}
		}
	}()
}
