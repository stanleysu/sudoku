import React, { Component } from "react";
import { Link } from "react-router-dom";

class Home extends Component {
	render() {
		const gameId = "SCOOTY";
		const linkToGame = "/" + gameId;
		return (
			<div id="home">
				<div id="topbar">
					<h1>Sudoku</h1>
				</div>
				<p id="intro">
					Play Sudoku online across multiple devices on a shared
					board. To create a game or join an existing game, enter a
					game identifier and click 'GO'.
				</p>
				<input type="text" value={gameId} />
				<Link to={linkToGame}>
					<button>GO</button>
				</Link>
				<div class="footer">Made for Mooney by Scooty</div>
			</div>
		);
	}
}

export default Home;
