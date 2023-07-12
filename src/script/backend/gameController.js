import { getBoard, getSolution } from "./getBoard";
import {
	allDifficults,
	fullGameFirstTime,
	initialGameFirstTime,
} from "../variables";

class Sudoku {
	constructor() {
		this.verifyDifficult();
		this.verifySaveGame();
		this.preLoadGames();
	}

	verifyDifficult() {
		if (!this.difficult) this.difficult = "easy";
	}

	verifySaveGame() {
		if (!this.actualGame) this.setFirstTime();
	}

	setFirstTime() {
		this.initialGame = [...initialGameFirstTime];
		this.actualGame = [...initialGameFirstTime];
		this.FullGame = [...fullGameFirstTime];
	}

	async initNewGame() {
		const board = await this.getLoadedGame(this.difficult);
		this.initialGame = await board[0];
		this.actualGame = await board[0];
		this.FullGame = await board[1];
		this.addPreLoadGame(this.difficult);
		return await board[0];
	}

	async preLoadGames() {
		allDifficults.map(async difficult => {
			await this.addPreLoadGame(difficult);
		});
	}

	async addPreLoadGame(difficult) {
		const thisLoad = [];
		thisLoad.push(difficult);
		thisLoad.push(await getBoard(difficult));
		thisLoad.push(await getSolution(await thisLoad[1]));
		this.setLoadedGame(thisLoad);
	}

	setLoadedGame(thisLoad) {
		localStorage.setItem(
			`pre-loaded-games-${thisLoad[0]}`,
			JSON.stringify([thisLoad[1].board, thisLoad[2]])
		);
	}

	getLoadedGame(difficult) {
		console.log(difficult);
		return JSON.parse(
			localStorage.getItem(`pre-loaded-games-${difficult}`)
		);
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

	async setNewCell(value, cellClicked) {
		const initial = await this.initialGame;
		const [row, column] = cellClicked;
		if (initial[row][column]) {
			return;
		}
		const actual = await this.actualGame;
		actual[row][column] = value;
		this.actualGame = await actual;
	}
}

export default Sudoku;