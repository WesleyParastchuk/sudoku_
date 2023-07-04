import React, { useState } from "react";
import OptionBar from "./OptionBar";
import SudokuMatriz from "./SudokuMatriz";

import "./Game.css";

const Game = props => {
	return (
		<div className="game-container">
			<OptionBar />
			<SudokuMatriz
				thisGame={props.thisGame}
				clickLoc={props.clickLoc}
				setClickLoc={newLoc => props.setClickLoc(newLoc)}
			/>
		</div>
	);
};

export default Game;
