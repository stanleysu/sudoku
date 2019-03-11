import PropTypes from "prop-types";
import React, { Component } from "react";

class Cell extends Component {
	onClick(e) {
		this.props.toggleSelectedCell(this.props.cellPosition);
	}

	render() {
		let className = "boardCell";

		if (!this.props.cellData.editable) {
			className += " uneditable";
		} else {
			className += " editable";
		}

		if (
			this.props.selectedCell.isSelected &&
			this.props.selectedCell.row == this.props.cellPosition.row &&
			this.props.selectedCell.col == this.props.cellPosition.col
		) {
			className += " selected";
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

Cell.propTypes = {
	cellData: PropTypes.object.isRequired,
	selectedCell: PropTypes.object.isRequired,
	toggleSelectedCell: PropTypes.func.isRequired
};

export default Cell;
