import React, { useState } from "react";

import { allDifficults, blockSize } from "../../../script/variables";

import "./NewGame.css";

const NewGame = () => {
	const [display, setDisplay] = useState("none");

	function Difficults() {
		return (
			<div className="pop-up-container" style={{ display: display }}>
				{"asdadasdasd"}
			</div>
		);
	}

	return (
		<button
			type="button"
			className="toolbar-new-game"
			onMouseEnter={() => setDisplay("block")}
			onMouseLeave={() => setDisplay("none")}
		>
			Novo jogo <Difficults />
		</button>
	);
};

export default NewGame;
