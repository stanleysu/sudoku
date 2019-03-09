package main

import (
	"fmt"
	r "github.com/dancannon/gorethink"
	"github.com/mitchellh/mapstructure"
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

	fmt.Printf("%#v\n", move)

	go func() {
		err := r.Table("game").
			Insert(move).
			Exec(client.session)

		if err != nil {
			client.send <- Message{"error", err.Error()}
		}
	}()
}
