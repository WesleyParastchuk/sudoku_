import React, { createContext, useState } from "react";

import { game } from "../../App";
import { getEmptyMatriz } from "../../script/manipulableFuntions";

export const GameContext = createContext();

export function GameContextProvider({ children }) {
	const [thisGame, setThisGame] = useState(game.actualGame);
	const [initialGame, setInitialGame] = useState(game.initialGame);
	const [clickedButton, setClickedButton] = useState([0, 0]);

	async function setNewGame() {
		setThisGame(getEmptyMatriz());
		const newGame = await game.initNewGame();
		setThisGame(await newGame);
		setInitialGame(await newGame);
	}

	async function resetThisGame() {
		game.actualGame = await initialGame;
		setThisGame(await initialGame);
	}

	async function actGame() {
		setThisGame(await game.actualGame);
	}

	return (
		<GameContext.Provider
			value={{
				thisGame,
				setNewGame,
				clickedButton,
				setClickedButton,
				initialGame,
				actGame,
				resetThisGame,
			}}
		>
			{children}
		</GameContext.Provider>
	);
}
