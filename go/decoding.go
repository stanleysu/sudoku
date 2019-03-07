package main

import (
	"encoding/json"
	"fmt"
	"github.com/mitchellh/mapstructure"
)

type Message struct {
	Name string      `json:"name"`
	Data interface{} `json:"data"`
}

type Move struct {
	Row   int `json:"row"`
	Col   int `json:"col"`
	Value int `json:"value"`
}

func main() {
	recRawMsg := []byte(`{"name": "move add", "data":{"row":0, "col": 5, "value": 9}}`)
	var recMessage Message
	err := json.Unmarshal(recRawMsg, &recMessage)
	if err != nil {
		fmt.Println(err)
		return
	}
	fmt.Printf("%#v\n", recMessage)

	if recMessage.Name == "move add" {
		move, err := addMove(recMessage.Data)
		var sendMessage Message
		sendMessage.Name = "move add"
		sendMessage.Data = move
		sendRawMsg, err := json.Marshal(sendMessage)
		if err != nil {
			fmt.Println(err)
			return
		}
		fmt.Printf(string(sendRawMsg))
	}
}

func addMove(data interface{}) (Move, error) {
	var move Move

	err := mapstructure.Decode(data, &move)
	if err != nil {
		return move, err
	}
	fmt.Printf("%#v\n", move)
	return move, nil
}
