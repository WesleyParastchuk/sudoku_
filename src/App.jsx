import React from "react";
import ToolBar from "./components/ToolBar";
import Game from "./components/Game";
import Header from "./components/Header";
import Footer from "./components/Footer";

import "./App.css";

function App() {
	return (
		<>
			<main className="app-container">
				<div className="main-container">
					<Header />
					<Game />
					<ToolBar />
				</div>
				<Footer />
			</main>
			
		</>
	);
}

export default App;
