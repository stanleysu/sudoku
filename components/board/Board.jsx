import PropTypes from "prop-types";
import React, { Component } from "react";
import BigCell from "./BigCell.jsx";
import SmallCell from "./SmallCell.jsx";

class Board extends Component {
	render() {
		const { board } = this.props;

		return (
			<div id="board">
				{board.map((row, r) => (
					<div key={r} className="boardRow">
						{row.map((cellData, c) => {
							return cellData.value != 0 ? (
								<BigCell
									key={c}
									cellData={cellData}
									cellRow={r}
									cellCol={c}
									selectedCell={this.props.selectedCell}
									toggleSelectedCell={
										this.props.toggleSelectedCell
									}
								/>
							) : (
								<SmallCell
									key={c}
									cellRow={r}
									cellCol={c}
									pencilMarks={this.props.pencilMarks[r][c]}
									togglePencilMarking={
										this.props.togglePencilMarking
									}
									pencilMode={this.props.pencilMode}
									makePencilSelection={
										this.props.makePencilSelection
									}
								/>
							);
						})}
					</div>
				))}
			</div>
		);
	}
}

Board.propTypes = {
	board: PropTypes.array.isRequired,
	pencilMarks: PropTypes.array.isRequired,
	selectedCell: PropTypes.object.isRequired,
	toggleSelectedCell: PropTypes.func.isRequired
};

export default Board;
