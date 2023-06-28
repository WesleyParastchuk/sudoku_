import React from "react";
import OptionButton from "./OptionButton";
import Numbers from "./Numbers";
import Note from "./Note";
import NewGame from "./NewGame";

import "./ToolBar.css";

const ToolBar = () => {
	return (
		<div className="toolbar-container">
			<div className="toolbar-options-of-game">
				<OptionButton option="Pausar" />
				<OptionButton option="Reiniciar" />
			</div>
			<Numbers max = {9} />
			<Note />
			<NewGame />
		</div>
	);
};

export default ToolBar;
