import { getBoard, getSolution } from "./getBoard";
import { allDifficults, totalBlocks } from "../variables";
import { getEmptyMatriz, randomOf } from "../manipulableFuntions";

class Sudoku {
	constructor() {
		this.verifyDifficult();
		this.verifySaveGame();
	}

	verifyDifficult() {
		if (!this.difficult) this.difficult = "easy";
	}

	verifySaveGame() {
		if (!this.actualGame) this.setFirstTime();
	}

	setFirstTime() {
		this.initialGame = getEmptyMatriz();
		this.actualGame = this.initialGame;
		this.FullGame = this.initialGame;
		this.firstTime = true;
	}

	async initNewGame() {
		const Board = await getBoard(this.difficult);
		this.initialGame = await Board.board;
		this.actualGame = await Board.board;
		this.FullGame = await getSolution(await Board);
		return await Board.board;
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
			this._cellClicked = [pos];
		}
	}

	get cellClicked() {
		return this._cellClicked;
	}

	Difficult;

	async setNewCell(value) {
		const initial = await this.initialGame;
		const [row, column] = this.cellClicked;
		if (initial[row][column]) {
			const actual = await this.actualGame;
			actual[row][column] = value;
			this.actualGame = actual;
		}
	}
}

export default Sudoku;
