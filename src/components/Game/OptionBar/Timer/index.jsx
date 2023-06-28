import React, { useState } from "react";

import "./Timer.css";

const Timer = () => {
	const [tempo, setTempo] = useState(0);

	return (
		<div className="game-option-bar-timer">
			<div className="game-option-bar-timer-number">{`${tempo}s`}</div>
		</div>
	);
};

export default Timer;
