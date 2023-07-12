import React, { useContext } from "react";
import { GameContext } from "../../../contexts/GameContext/GameContext";

import "./Notes.css";

export function Notes() {
	const { isNote, changeIsNote } = useContext(GameContext);
	return (
		<button className="note-button" type="button" onClick={changeIsNote}>
			Anotar: {isNote ? "Sim" : "Não"}
		</button>
	);
}
