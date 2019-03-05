import React, {Component} from 'react';
import Board from './board/Board.jsx';

import {deepCopy, getDefaultBoard, isBetween1and9, isBackspaceOrDelete} from './utils.js';

class App extends Component{
	constructor(props){
		super(props);

		const EMPTY_BOARD = getDefaultBoard();

		this.state = { 
			board: EMPTY_BOARD,
			selectedCell: { 
				isSelected: false,
				row: -1,
				col: -1,
				val: 0
			},
			connected: false
		};
		this.toggleSelectedCell = this.toggleSelectedCell.bind(this);
		this.handleKeyDown = this.handleKeyDown.bind(this);
		this.addMove = this.addMove.bind(this);
	}

	componentDidMount(){
		document.addEventListener("keydown", this.handleKeyDown);

		let ws = this.ws = new WebSocket('ws://echo.websocket.org');
		ws.onmessage = this.message.bind(this);
		ws.onopen = this.open.bind(this);
		ws.onclose = this.close.bind(this);
	}

	message(e){
		const event = JSON.parse(e.data);		
		if(event.name === 'move add'){
			this.setMove(event.data)
		}
	}
	open(){
		this.setState({connected: true})
	}
	close(){
		this.setState({connected: false})
	}

	addMove(move){
		let msg = {
			name: 'move add',
			data: move
		}

		this.ws.send(JSON.stringify(msg))
	}

	setMove(move){
		let {board, selectedCell} = this.state;

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

	toggleSelectedCell(cellPosition){
		//if clicked same cell, flip isSelected
		//if clicked different cell, isSelected = true

		var isSelected = this.state.selectedCell.isSelected;
		if(cellPosition.row == this.state.selectedCell.row && cellPosition.col == this.state.selectedCell.col){
			isSelected = !isSelected;
		}
		else{
			isSelected = true;
		}

		this.setState({
			selectedCell: {
				isSelected: isSelected,
				row: cellPosition.row,
				col: cellPosition.col,
				value: this.state.board[cellPosition.row][cellPosition.col].value
			}
		});
	}

	handleKeyDown(event){
		if(this.state.selectedCell.isSelected) {
			const keyCode = event.keyCode;
			//check keycode between 1 to 9 on keyboard or numpad
			if((isBetween1and9(keyCode) || isBackspaceOrDelete(keyCode)) &&  
				this.state.board[this.state.selectedCell.row][this.state.selectedCell.col].editable){
				const newValue = isBetween1and9(keyCode) ? parseInt(event.key) : null;

				const move = {
					row: this.state.selectedCell.row,
					col: this.state.selectedCell.col,
					value: newValue
				}
				this.addMove(move);
			}
		}
	}

	render(){
		return (
			<div className='app'>
				<Board 
					board={this.state.board} 
					selectedCell={this.state.selectedCell}
					toggleSelectedCell={this.toggleSelectedCell}
				/>
			</div>
		)
	}
}

export default App