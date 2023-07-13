import { getBoard, getSolution } from "./getBoard";
import {
	allDifficults,
	fullGameFirstTime,
	initialGameFirstTime,
} from "../variables";
import { cleanNotes, isNoteCell, isValid } from "../manipulableFuntions";

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
		const loadedGame = await this.getLoadedGame(this.difficult);
		this.initialGame = await loadedGame.initial;
		this.actualGame = await loadedGame.initial;
		this.FullGame = await loadedGame.full;
		this.addPreLoadGame(this.difficult);
		return await loadedGame.initial;
	}

	async setNewCell(valueToSet, cell) {
		if (await this.isInitialNumber(cell.row, cell.column)) return;
		if (isNoteCell(valueToSet)) {
			valueToSet = valueToSet.map(thisOne =>
				thisOne ? Number(thisOne) : ""
			);
		} else {
			valueToSet = Number(valueToSet);
		}
		const actual = await this.actualGame;
		if (await isValid(await actual, cell.row, cell.column, valueToSet)) {
			actual[cell.row][cell.column] = valueToSet;
			this.actualGame = await cleanNotes(
				await actual,
				cell.row,
				cell.column,
				valueToSet
			);
		}
	}

	async preLoadGames() {
		allDifficults.map(async difficult => {
			await this.addPreLoadGame(difficult);
		});
	}

	async addPreLoadGame(difficult) {
		const thisLoad = {};
		thisLoad.difficult = difficult;
		thisLoad.initial = await getBoard(difficult);
		thisLoad.full = await getSolution(await thisLoad.initial);
		this.setLoadedGame(thisLoad);
	}

	async setLoadedGame(thisLoad) {
		localStorage.setItem(
			`pre-loaded-games-${thisLoad.difficult}`,
			JSON.stringify([thisLoad.initial.board, thisLoad.full])
		);
	}

	async getLoadedGame(difficult) {
		const thisLoad =  await JSON.parse(
			localStorage.getItem(`pre-loaded-games-${difficult}`)
		);
		return { initial: thisLoad[0], full: thisLoad[1] };
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

	async isInitialNumber(row, column) {
		return await this.initialGame[row][column];
	}
}

export default Sudoku;
