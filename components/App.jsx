import React, {Component} from 'react';
import Board from './board/Board.jsx';

class App extends Component{
	constructor(props){
		super(props);

		const EMPTY_SQUARE = {value: "1", editable: false}
		const EMPTY_ROW = Array(9).fill(EMPTY_SQUARE);
		const EMPTY_BOARD = Array(9).fill(EMPTY_ROW);

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
				val: this.state.board[cellPosition.row][cellPosition.col].value
			}
		});
	}

	handleKeyDown(event){
	 	if((event.keyCode >= 49 && event.keyCode <= 57) || (event.keyCode >= 97 && event.keyCode <= 105)) { 
			if(this.state.selectedCell.isSelected){
				const newBoard = this.state.board;
				newBoard[this.state.selectedCell.row][this.state.selectedCell.col] = event.key;
				
				this.setState({
					board: newBoard
				})
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