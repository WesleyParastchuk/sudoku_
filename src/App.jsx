import React from "react";
import { Game } from "./components/Game";
import { Menu } from "./components/Menu";
import { GameContextProvider } from "./contexts/GameContext/GameContext";

import "./App.css";

import Sudoku from "./script/gameController";

export const game = new Sudoku();

function App() {
	return (
		<main className="app-container">
			<GameContextProvider>
				<Game />
				<Menu />
			</GameContextProvider>
		</main>
	);
}

export default App;
