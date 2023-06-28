import React from "react";
import ToolBar from "./components/ToolBar";
import Game from "./components/Game";

import "./App.css";

function App() {
	return (
		<main className="app-container">
			<Game />
			<ToolBar />
		</main>
	);
}

export default App;
