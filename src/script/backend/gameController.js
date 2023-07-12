import { getBoard, getSolution } from "./getBoard";
import {
	allDifficults,
	fullGameFirstTime,
	initialGameFirstTime,
} from "../variables";
import {
	calcBlockColumn,
	calcBlockRow,
	getBlock,
	getColumn,
	getRow,
} from "../manipulableFuntions";

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

	async isValid(matriz, row, column, value) {
		if (value == 0 || value == "") return true;
		if (
			(await getRow(matriz, row)).includes(value) ||
			(await getColumn(matriz, column).includes(value)) ||
			(await getBlock(
				matriz,
				calcBlockRow(row),
				calcBlockColumn(column)
			).includes(value))
		) {
			return false;
		} else {
			return true;
		}
	}

	async cleanNote(actual, row, column, value) {
		if (value == 0 || value == "") return actual;
		(await getRow(actual, row)).map((element, index) => {
			if (typeof element == "object" && index != column) {
				if (element.includes(value)) {
					actual[row][index][value - 1] = 0;
				}
			}
		});
		(await getColumn(actual, column)).map((element, index) => {
			if (typeof element == "object" && index != row) {
				if (element.includes(value)) {
					actual[index][column][value - 1] = 0;
				}
			}
		});
		(
			await getBlock(actual, calcBlockRow(row), calcBlockColumn(column))
		).map((element, index) => {
			const thisRow = calcBlockRow(row) * 3 + Math.floor(index / 3);
			const thisColumn = calcBlockColumn(column) * 3 + (index % 3);
			if (typeof element == "object" && (index != (thisRow*3 + thisColumn))) {
				if (element.includes(value)) {
					actual[thisRow][thisColumn][value - 1] = 0;
				}
			}
		});
		return actual;
	}

	async setNewCell(value, cellClicked) {
		if (typeof value == "object")
			value = value.map(thisOne => (thisOne ? Number(thisOne) : ""));
		else value = Number(value);
		const initial = await this.initialGame;
		const [row, column] = cellClicked;
		if (initial[row][column]) {
			return;
		}
		const actual = await this.actualGame;
		if (await this.isValid(await actual, row, column, value)) {
			actual[row][column] = value;
			this.actualGame = await this.cleanNote(
				await actual,
				row,
				column,
				value
			);
		}
	}
}

export default Sudoku;
