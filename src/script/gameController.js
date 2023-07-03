import { createRandomMatriz, createEmptyMatriz } from "./generateMatriz";
import { allDifficults, totalBlocks } from "./variables";
import { randomOf } from "./manipulableFuntions";

class Sudoku {
	constructor() {
		this.verifyDifficult();
		this.verifySaveGame();
		this.verifyInitialClick();
	}

	verifyDifficult() {
		if (!this.difficult) this.difficult = "medium";
	}

	verifySaveGame() {
		if (!this.actualGame) this.initNewGame();
	}

	verifyInitialClick() {
		if (!this.cellClicked) this.cellClicked = false;
	}

	initNewGame() {
		this.FullGame = createRandomMatriz();
		this.initialGame = this.configInitialGame();
		this.actualGame = this.initialGame;
	}

	configInitialGame() {
		const initialMatriz = createEmptyMatriz();
		const fullMatriz = this.FullGame;
		for (let row = 0; row < totalBlocks; row++) {
			for (let column = 0; column < totalBlocks; column++) {
				if (
					randomOf(totalBlocks * totalBlocks) <
					allDifficults[this.difficult]
				) {
					initialMatriz[row][column] = fullMatriz[row][column];
				}
			}
		}
		return initialMatriz;
	}

	cellClick(event) {
		this.cellClicked = event.target;
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

	set cellClicked(clicked) {
		if (clicked) {
			localStorage.setItem(
				"clicked",
				JSON.stringify([
					clicked.getAttribute("row"),
					clicked.getAttribute("column"),
				])
			);
			return;
		}
		localStorage.setItem("clicked", JSON.stringify([0, 0]));
	}

	get cellClicked() {
		return JSON.parse(localStorage.getItem("clicked"));
	}
}

export default Sudoku;
