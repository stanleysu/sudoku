import PropTypes from 'prop-types';
import React, {Component} from 'react';

class Cell extends Component{
	render(){
		return (
			<div className="cell">
				{this.props.cellData.value == 0 ? '__' : this.props.cellData.value}
			</div>
		)
	}
}

Cell.propTypes = {
	cellData: PropTypes.object.isRequired
}

export default Cell