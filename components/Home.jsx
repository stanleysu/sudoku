import React, { Component } from "react";
import { Link } from "react-router-dom";
import Header from "./Header.jsx";
import "./Home.css";

class Home extends Component {
	render() {
		const gameId = "SCOOTY";
		const linkToGame = "/" + gameId;
		return (
			<div id="home">
				<Header />
				<p id="intro">
					Play Sudoku online across multiple devices on a shared
					board. To create a game or join an existing game, enter a
					game identifier and click 'GO'.
				</p>
				<input type="text" value={gameId} />
				<Link to={linkToGame}>
					<button>GO</button>
				</Link>
				<div className="footer">Made for Mooney by Scooty</div>
			</div>
		);
	}
}

export default Home;
