import React from "react";
import OptionBar from "./OptionBar";
import SudokuMatriz from "./SudokuMatriz";

import "./Game.css";

const Game = () => {
	return (
		<div className="game-container">
			<OptionBar />
			<SudokuMatriz />
		</div>
	);
};

export default Game;
