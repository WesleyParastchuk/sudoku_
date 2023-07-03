import React, { useState } from "react";
import SelectDifficult from "./SelectDifficult";

import "./NewGame.css";

const NewGame = (props) => {
	const [display, setDifficultDisplay] = useState("none");

	function closeSelection() {
		setDifficultDisplay("none");
	}

	function openSelection() {
		setDifficultDisplay("block");
	}

	return (
		<>
			<div className="toolbar-new-game" onClick={openSelection}>
				Novo jogo
			</div>
			<SelectDifficult
				display={display}
				closeSelection={() => closeSelection()}
				setThisGame={(newGame) => props.setThisGame(newGame)}
			/>
		</>
	);
};

export default NewGame;
