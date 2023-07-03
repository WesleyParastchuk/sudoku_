import React from "react";

import { game } from "../../../../../App";
import { title, removeDash } from "../../../../../script/manipulableFuntions";

import "./Difficult.css";

const Difficult = (props) => {
	return (
		<button
			className={`${props.dif} difficult`}
			onClick={() => {
				game.difficult = props.dif;
				props.closeSelection();
				game.initNewGame();
				props.setThisGame(game.actualGame);
			}}
		>
			{removeDash(title(props.dif))}
		</button>
	);
};

export default Difficult;
