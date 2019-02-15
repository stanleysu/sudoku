import React, {Component} from 'react';
import Board from './board/Board.jsx';

class App extends Component{
	render(){
		const mockCell1 = {value: 1, editable: true}
		const mockCell2 = {value: 2, editable: true}
		const mockCell3 = {value: 3, editable: true}
		const mockCellEmpty = {value: 0, editable: true}
		const mockCellUneditable = {value: 3, editable: false}

		
		const mockGameState = {
			board: [
				[mockCell1, mockCell2, mockCell3, mockCellUneditable, mockCellEmpty, mockCell1, mockCell2, mockCell3, mockCellUneditable],
				[mockCell1, mockCell2, mockCell3, mockCellUneditable, mockCellEmpty, mockCell1, mockCell2, mockCell3, mockCellUneditable],
				[mockCell1, mockCell2, mockCell3, mockCellUneditable, mockCellEmpty, mockCell1, mockCell2, mockCell3, mockCellUneditable],
				[mockCell1, mockCell2, mockCell3, mockCellUneditable, mockCellEmpty, mockCell1, mockCell2, mockCell3, mockCellUneditable],
				[mockCell1, mockCell2, mockCell3, mockCellUneditable, mockCellEmpty, mockCell1, mockCell2, mockCell3, mockCellUneditable],
				[mockCell1, mockCell2, mockCell3, mockCellUneditable, mockCellEmpty, mockCell1, mockCell2, mockCell3, mockCellUneditable],
				[mockCell1, mockCell2, mockCell3, mockCellUneditable, mockCellEmpty, mockCell1, mockCell2, mockCell3, mockCellUneditable],
				[mockCell1, mockCell2, mockCell3, mockCellUneditable, mockCellEmpty, mockCell1, mockCell2, mockCell3, mockCellUneditable],
				[mockCell1, mockCell2, mockCell3, mockCellUneditable, mockCellEmpty, mockCell1, mockCell2, mockCell3, mockCellUneditable]
			],
			moves: []
		}

		return (
			<div className='app'>
				<Board gameState={mockGameState} />
			</div>
		)
	}
}

export default App