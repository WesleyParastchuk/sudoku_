import React, { useState } from "react";

import "./NewGame.css";

import Difficults from "./Difficults";

const NewGame = () => {
	const [display, setDifficultDisplay] = useState("block");

	return (
		<button
			type="button"
			className="toolbar-new-game"
			onClick={() => setDifficultDisplay("block")}
			onMouseLeave={() => setDifficultDisplay("none")}
		>
			Novo jogo <Difficults display={display} />
		</button>
	);
};

export default NewGame;
