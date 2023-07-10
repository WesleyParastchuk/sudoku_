import { getBoard, getSolution } from "./getBoard";
import { allDifficults, totalBlocks } from "../variables";
import { randomOf } from "../manipulableFuntions";

class Sudoku {
	constructor() {
		this.verifyDifficult();
		this.verifySaveGame();
		this.verifyInitialClick();
	}

	verifyDifficult() {
		if (!this.difficult) this.difficult = "easy";
	}

	verifySaveGame() {
		if (!this.actualGame) this.initNewGame();
	}

	verifyInitialClick() {
		if (!this.cellClicked) this.cellClicked = false;
	}

	async initNewGame() {
		let thisBoard = await getBoard(this.difficult);
		this.initialGame = thisBoard.board;
		this.actualGame = this.initialGame;
		this.FullGame = await getSolution(this.initialGame);
	}

	cellClick(event) {
		this.cellClicked = [
			event.target.getAttribute("row"),
			event.target.getAttribute("column"),
		];
	}

	set FullGame(fullGame) {
		localStorage.setItem("full-game", JSON.stringify(fullGame));
	}

	get FullGame() {
		return JSON.parse(localStorage.getItem("full-game"));
	}

	set initialGame(initialGame) {
		localStorage.setItem("initial-game", JSON.stringify(initialGame));
	}

	get initialGame() {
		return JSON.parse(localStorage.getItem("initial-game"));
	}

	set actualGame(actualGame) {
		localStorage.setItem("actual-game", JSON.stringify(actualGame));
	}

	get actualGame() {
		return JSON.parse(localStorage.getItem("actual-game"));
	}

	set difficult(difficult) {
		localStorage.setItem("difficult", JSON.stringify(difficult));
	}

	get difficult() {
		return JSON.parse(localStorage.getItem("difficult"));
	}

	set cellClicked(pos) {
		if (pos) {
			const [row, column] = pos;
			localStorage.setItem("clicked", JSON.stringify([row, column]));
			return;
		}
		localStorage.setItem("clicked", JSON.stringify([0, 0]));
	}

	get cellClicked() {
		return JSON.parse(localStorage.getItem("clicked"));
	}
}

export default Sudoku;
