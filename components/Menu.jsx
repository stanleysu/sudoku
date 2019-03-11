import PropTypes from "prop-types";
import React, { Component } from "react";
import "./Menu.css";

class Menu extends Component {
	onClick(e) {
		this.props.togglePencilMode();
	}
	render() {
		const { pencilMode } = this.props;
		const text = pencilMode ? "Pencil Mode On" : "Pencil Mode Off";
		return (
			<div id="menu">
				<button
					id="PencilModeToggleBtn"
					onClick={this.onClick.bind(this)}
				>
					{text}
				</button>
				<button id="nextGameBtn">Next game</button>
			</div>
		);
	}
}

export default Menu;
