import React, { Component } from "react";
import { Link } from "react-router-dom";
import Header from "./Header.jsx";
import "./Home.css";

class Home extends Component {
	constructor(props) {
		super(props);
		this.state = { gameId: "banana" };
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(event) {
		this.setState({ gameId: event.target.value });
	}

	render() {
		const linkToGame = "/" + this.state.gameId;
		return (
			<div id="home">
				<Header />
				<p id="intro">
					Play Sudoku online across multiple devices on a shared
					board. To create a game or join an existing game, enter a
					game identifier and click 'GO'.
				</p>
				<input
					type="text"
					defaultValue={this.state.gameId}
					onChange={this.handleChange}
				/>
				<Link to={linkToGame}>
					<button>GO</button>
				</Link>
				<div className="footer">Made for Mooney by Scooty</div>
			</div>
		);
	}
}

export default Home;
