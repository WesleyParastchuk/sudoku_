import React, { useState } from "react";

import { allDifficults, blockSize } from "../../../script/variables";

import "./NewGame.css";

const NewGame = () => {
    const [display, setDisplay] = useState("none")
	function Difficults() {
		return (
			<div className="pop-up-container" style={{display: display}}>
				{"asdadasdasd"}
			</div>
		);
	}

    function showDifficults(){
        setDisplay("block")
    }

	function hideDifficults() {
		setDisplay("none")
	}

	return (
		<button
			type="button"
			className="toolbar-new-game"
			onMouseEnter={showDifficults}
			onMouseLeave={hideDifficults}
		>
			Novo jogo <Difficults/>
		</button>
	);
};

export default NewGame;
