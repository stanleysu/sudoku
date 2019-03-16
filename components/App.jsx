import React, { Component } from "react";
import Board from "./board/Board.jsx";
import {
	deepCopy,
	getDefaultBoard,
	getEmptyPencilMarks,
	isBetween1and9,
	isBackspaceOrDelete
} from "./utils.js";
import Header from "./Header.jsx";
import Menu from "./Menu.jsx";
import Socket from "../socket.js";
import "./App.css";

class App extends Component {
	constructor(props) {
		super(props);

		const EMPTY_BOARD = getDefaultBoard();
		const EMPTY_PENCILMARKS = getEmptyPencilMarks();
		this.state = {
			board: EMPTY_BOARD,
			selectedCell: {
				isSelected: false,
				row: -1,
				col: -1,
				val: 0
			},
			pencilMarks: EMPTY_PENCILMARKS,
			pencilMode: false,
			connected: false,
			gameId: this.props.match.params.gameId
		};
		this.toggleSelectedCell = this.toggleSelectedCell.bind(this);
		this.togglePencilMode = this.togglePencilMode.bind(this);
		this.togglePencilMarking = this.togglePencilMarking.bind(this);
		this.handleKeyDown = this.handleKeyDown.bind(this);
		this.addMove = this.addMove.bind(this);
		this.fillCell = this.fillCell.bind(this);
		this.makePencilSelection = this.makePencilSelection.bind(this);
	}

	componentDidMount() {
		let ws = new WebSocket("ws://localhost:4000");
		let socket = (this.socket = new Socket(ws));
		socket.on("connect", this.onConnect.bind(this));
		socket.on("disconnect", this.onDisconnect.bind(this));
		socket.on("move add", this.onAddMove.bind(this));
		document.addEventListener("keydown", this.handleKeyDown);
	}

	onConnect() {
		this.setState({ connected: true });
		this.socket.emit("game subscribe", { gameId: this.state.gameId });
	}
	onDisconnect() {
		this.setState({ connected: false });
	}
	onAddMove(move) {
		this.setMove(move);
	}

	addMove(move) {
		this.socket.emit("move add", { gameId: this.state.gameId, ...move });
	}
	setMove(move) {
		let { board, selectedCell } = this.state;

		board[move.row][move.col].value = move.value;
		this.setState({
			board: board
		});

		selectedCell.val = move.value;
		this.setState({
			selectedCell: selectedCell
		});
	}

	componentWillUnmount() {
		document.removeEventListener("keydown", this.handleKeyDown);
	}

	toggleSelectedCell(row, col) {
		//if clicked same cell, flip isSelected
		//if clicked different cell, isSelected = true

		var isSelected = this.state.selectedCell.isSelected;
		if (
			row == this.state.selectedCell.row &&
			col == this.state.selectedCell.col
		) {
			isSelected = !isSelected;
		} else {
			isSelected = true;
		}

		this.setState({
			selectedCell: {
				isSelected: isSelected,
				row: row,
				col: col,
				value: this.state.board[row][col].value
			}
		});
	}

	handleKeyDown(event) {
		const keyCode = event.keyCode;

		if (this.state.selectedCell.isSelected) {
			//check keycode between 1 to 9 on keyboard or numpad
			if (
				(isBetween1and9(keyCode) || isBackspaceOrDelete(keyCode)) &&
				this.state.board[this.state.selectedCell.row][
					this.state.selectedCell.col
				].editable
			) {
				const newValue = isBetween1and9(keyCode)
					? parseInt(event.key)
					: 0;
				this.fillCell(
					this.state.selectedCell.row,
					this.state.selectedCell.col,
					newValue
				);
			}
		}

		if (keyCode == 80) {
			this.togglePencilMode();
		}
	}

	togglePencilMode() {
		this.setState(prevState => ({
			pencilMode: !prevState.pencilMode
		}));
	}

	togglePencilMarking(row, col, i) {
		let { pencilMarks } = this.state;
		const curPencilMark = this.state.pencilMarks[row][col][i];
		pencilMarks[row][col][i] = !curPencilMark;
		this.setState({
			pencilMarks: pencilMarks
		});
	}

	makePencilSelection(row, col, value) {
		this.fillCell(row, col, value);
	}

	fillCell(row, col, value) {
		const move = {
			row: row,
			col: col,
			value: value
		};
		this.addMove(move);
	}

	render() {
		const url = "localhost:8080/" + this.props.match.params.gameId;
		return (
			<div className="app">
				<div id="gameContainer">
					<Header />
					<div id="share">
						Send this link to friends: <a href={url}>{url}</a>
					</div>
					<hr />
					<Board
						board={this.state.board}
						selectedCell={this.state.selectedCell}
						toggleSelectedCell={this.toggleSelectedCell}
						pencilMarks={this.state.pencilMarks}
						togglePencilMarking={this.togglePencilMarking}
						pencilMode={this.state.pencilMode}
						makePencilSelection={this.makePencilSelection}
					/>
					<Menu
						pencilMode={this.state.pencilMode}
						togglePencilMode={this.togglePencilMode}
					/>
				</div>
			</div>
		);
	}
}

export default App;
