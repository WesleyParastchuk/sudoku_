import React, { useState } from "react";

import { getAllDifficults } from "../../../script/manipulableFuntions";

import "./NewGame.css";

const NewGame = () => {
	const [display, setDisplay] = useState("none");
	const difficults = getAllDifficults();

	function Difficults() {
		return (
			<div className="pop-up-container" style={{ display: display }}>
				{difficults.map((difficult) => {
					return(<div className={`${difficult} difficult`}>{difficult}</div>)
				})}
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
