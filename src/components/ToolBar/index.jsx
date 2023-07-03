import React from "react";
import OptionButton from "./OptionButton";
import Numbers from "./Numbers";
import Note from "./Note";
import NewGame from "./NewGame";

import "./ToolBar.css";

const ToolBar = (props) => {
	return (
		<div className="toolbar-container">
			<div className="toolbar-options-of-game">
				<OptionButton option="Pausar" />
				<OptionButton option="Reiniciar" />
			</div>
			<Numbers max={9} />
			<Note />
			<NewGame setThisGame={(newGame) => props.setThisGame(newGame)} />
		</div>
	);
};

export default ToolBar;
