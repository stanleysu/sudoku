package main

import (
	r "github.com/dancannon/gorethink"
	"log"
	"net/http"
)

func main() {
	session, err := r.Connect(r.ConnectOpts{
		Address:  "localhost:28015",
		Database: "sudoku",
	})

	if err != nil {
		log.Panic(err.Error())
	}

	router := NewRouter(session)

	router.Handle("move add", addMove)

	http.Handle("/", router)
	http.ListenAndServe(":4000", nil)
}
