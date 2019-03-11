import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App.jsx";
import Home from "./components/Home.jsx";
import { BrowserRouter, Switch, Route } from "react-router-dom";

ReactDOM.render(
	<BrowserRouter>
		<Switch>
			<Route exact path="/" component={Home} />
			{/* both /roster and /roster/:number begin with /roster */}
			<Route path="/:gameId" component={App} />
		</Switch>
	</BrowserRouter>,
	document.getElementById("root")
);
