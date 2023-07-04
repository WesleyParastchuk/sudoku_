import React, { useState } from "react";
import ToolBar from "./components/ToolBar";
import Game from "./components/Game";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { createKeysEvents } from "./script/addKeysEvent.js";

import Sudoku from "./script/gameController";
import "./App.css";

export const game = new Sudoku();

createKeysEvents();

function App() {
	const [thisGame, setThisGame] = useState(
		game.actualGame || game.initNewGame().actualGame
	);

	const [clickLoc, setClickLoc] = useState(
		game.cellClicked || game.cellClicked(false).cellClicked
	);
	return (
		<>
			<main className="app-container">
				<div className="main-container">
					<Header />
					<Game
						thisGame={thisGame}
						clickLoc={clickLoc}
						setClickLoc={newLoc => setClickLoc(newLoc)}
					/>
					<ToolBar setThisGame={newGame => setThisGame(newGame)} />
				</div>
			</main>
		</>
	);
}

export default App;
