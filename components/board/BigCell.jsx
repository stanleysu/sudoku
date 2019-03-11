import PropTypes from "prop-types";
import React, { Component } from "react";

class BigCell extends Component {
	onClick(e) {
		this.props.toggleSelectedCell(this.props.cellRow, this.props.cellCol);
	}

	render() {
		let className = "bigCell boardCell";

		if (!this.props.cellData.editable) {
			className += " uneditableCell";
		} else {
			className += " editableCell";
		}

		if (
			this.props.selectedCell.isSelected &&
			this.props.selectedCell.row == this.props.cellRow &&
			this.props.selectedCell.col == this.props.cellCol
		) {
			className += " selectedCell";
		}

		let cellValue;
		if (this.props.cellData.value == 0) {
			cellValue = "\u00A0";
		} else {
			cellValue = this.props.cellData.value;
		}

		return (
			<div className={className} onClick={this.onClick.bind(this)}>
				<span className="cellValue">{cellValue}</span>
			</div>
		);
	}
}

BigCell.propTypes = {
	cellData: PropTypes.object.isRequired,
	selectedCell: PropTypes.object.isRequired,
	toggleSelectedCell: PropTypes.func.isRequired
};

export default BigCell;
