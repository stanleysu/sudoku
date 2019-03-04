import PropTypes from 'prop-types';
import React, {Component} from 'react';

import Cell from './Cell.jsx';

class Board extends Component{
	render(){
		const {board} = this.props;
		return (
			<div id='board'>
				{
					board.map((row, r) => 
						<div key={r} className='boardRow'>
							{
								row.map((cellData, c) => 
									<Cell 
										key={c} 
										cellData={cellData} 
										cellPosition={{row: r, col: c}}
										cellRow={r} 
										cellCol={c} 
										selectedCell={this.props.selectedCell}
										toggleSelectedCell={this.props.toggleSelectedCell}
									/>
								)
							}
						</div>
					)
				}
			</div>
		)
	}
}

Board.propTypes = {
	board: PropTypes.object.isRequired,
	selectedCell: PropTypes.object.isRequired,
	toggleSelectedCell: PropTypes.func.isRequired
}

export default Board