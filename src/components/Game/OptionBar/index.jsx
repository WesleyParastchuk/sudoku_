import React from "react";
import ButtonOptionBar from "./ButtonOptionBar";
import Timer from "./Timer";

import "./OptionBar.css";

const OptionBar = () => {
	return (
		<div className="game-option-bar-container">
			<Timer />
			<div className="game-option-bar-button-container">
				<ButtonOptionBar option="Checar" />
				<ButtonOptionBar option="Limpar" />
				<ButtonOptionBar option="Dica" />
			</div>
		</div>
	);
};

export default OptionBar;
