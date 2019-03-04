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
			}
		};
		this.toggleSelectedCell = this.toggleSelectedCell.bind(this);
		this.handleKeyDown = this.handleKeyDown.bind(this);
	}

	componentDidMount(){
		document.addEventListener("keydown", this.handleKeyDown);
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
			if(isBetween1and9(keyCode) || isBackspaceOrDelete(keyCode)) { 
				const newValue = isBetween1and9(keyCode) ? event.key : '0';

				if(this.state.board[this.state.selectedCell.row][this.state.selectedCell.col].editable){
					const newBoard = deepCopy(this.state.board);
					newBoard[this.state.selectedCell.row][this.state.selectedCell.col].value = newValue;
					this.setState({
						board: newBoard
					})

					const newSelectedCell = deepCopy(this.state.selectedCell);
					newSelectedCell.val = newValue;
					this.setState({
						selectedCell: newSelectedCell
					})
				}
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