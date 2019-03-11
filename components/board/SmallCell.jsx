import PropTypes from "prop-types";
import React, { Component } from "react";
import PencilCell from "./PencilCell.jsx";

class SmallCell extends Component {
	render() {
		const defaultPencilMarkValues = [1, 2, 3, 4, 5, 6, 7, 8, 9];
		return (
			<div className="smallCell boardCell">
				{defaultPencilMarkValues.map((p, i) => (
					<PencilCell
						key={i}
						i={i}
						value={p}
						cellRow={this.props.cellRow}
						cellCol={this.props.cellCol}
						pencilMark={this.props.pencilMarks[i]}
						togglePencilMarking={this.props.togglePencilMarking}
						pencilMode={this.props.pencilMode}
						makePencilSelection={this.props.makePencilSelection}
					/>
				))}
			</div>
		);
	}
}

export default SmallCell;
