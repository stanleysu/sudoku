import PropTypes from "prop-types";
import React, { Component } from "react";

class PencilCell extends Component {
	onClick(e) {
		//make marking if pencilMode == true
		if (this.props.pencilMode) {
			this.props.togglePencilMarking(
				this.props.cellRow,
				this.props.cellCol,
				this.props.i
			);
		}
		//fill in cell with value if pencilMode == false
		else {
			this.props.makePencilSelection(
				this.props.cellRow,
				this.props.cellCol,
				this.props.value
			);
		}
	}

	render() {
		var className = "pencilCell";
		if (this.props.pencilMark == true) {
			className += " pencilMarked";
		}

		return (
			<div className={className} onClick={this.onClick.bind(this)}>
				{this.props.value}
			</div>
		);
	}
}

export default PencilCell;
