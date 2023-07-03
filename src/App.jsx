import React, { useState } from "react";
import ToolBar from "./components/ToolBar";
import Game from "./components/Game";
import Header from "./components/Header";
import Footer from "./components/Footer";

import Sudoku from "./script/gameController";
import "./App.css";

export const game = new Sudoku();

function App() {
	const [thisGame, setThisGame] = useState(game.actualGame || game.initNewGame().actualGame);
	function linkSetThisGame (newGame){
		setThisGame(newGame);
	}
	return (
		<>
			<main className="app-container">
				<div className="main-container">
					<Header />
					<Game thisGame = {thisGame}/>
					<ToolBar setThisGame={(newGame)=>setThisGame(newGame)}/>
				</div>
			</main>
		</>
	);
}

export default App;
