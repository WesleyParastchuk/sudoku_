import React from "react";
import { createRandomMatriz } from "../../../script/generateMatriz";

const SudokuMatriz = () => {
    let local = createRandomMatriz();
	localStorage.setItem("fullGame", JSON.stringify(local));
	return <a></a>;
};

export default SudokuMatriz;
