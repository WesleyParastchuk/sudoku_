import React from "react";
import OptionBar from "./OptionBar";

import "./Game.css";

const Game = () => {
	const gameImage =
		"https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Sudoku_Puzzle_by_L2G-20050714_standardized_layout.svg/250px-Sudoku_Puzzle_by_L2G-20050714_standardized_layout.svg.png";
	return (
		<div className="game-container">
			<OptionBar />
			<img src={gameImage} alt="Sudoku" className="sudoku" />
		</div>
	);
};

export default Game;
