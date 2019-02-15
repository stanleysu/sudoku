import PropTypes from 'prop-types';
import React, {Component} from 'react';

import Cell from './Cell.jsx';

class Board extends Component{
	render(){
		return (
			<div id='board'>
				{
					this.props.gameState.board.map((row, index) => 
						<div key={index} className='row'>
							{
								row.map((cellData, subindex) => 
									<Cell cellData={cellData} />
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
	gameState: PropTypes.object.isRequired,
}

export default Board