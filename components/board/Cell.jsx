import PropTypes from 'prop-types';
import React, {Component} from 'react';

class Cell extends Component{
	onClick(e){
		this.props.toggleSelectedCell(this.props.cellPosition)
	}

	render(){
		let className = 'boardCell'

		if (!this.props.cellData.editable) {
			className += ' uneditable';
		}
		else {
			className += ' editable'
		}

		if (this.props.selectedCell.isSelected && 
			this.props.selectedCell.row == this.props.cellPosition.row && 
			this.props.selectedCell.col == this.props.cellPosition.col) {
			className += ' selected'
		}

		return (
			<div className={className} onClick={this.onClick.bind(this)}>
				{this.props.cellData.value == "0" ? <span>&nbsp;</span> : this.props.cellData.value}
			</div>
		)
	}
}

Cell.propTypes = {
	cellData: PropTypes.object.isRequired,
	selectedCell: PropTypes.object.isRequired,
	toggleSelectedCell: PropTypes.func.isRequired
}

export default Cell