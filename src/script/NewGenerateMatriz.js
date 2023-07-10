import { createEmptyMatriz } from "./generateMatriz";
import {
	listThisUpTo,
	randomOf,
	calcBlockColumn,
	calcBlockRow,
} from "./manipulableFuntions";
import { blockSize, totalBlocks } from "./variables";

const blocksPattern = [
	[
		[
			[0, 0, 0],
			[0, 0, 0],
			[0, 0, 0],
		],
		[
			[0, 0, 0],
			[0, 0, 0],
			[0, 0, 0],
		],
		[
			[0, 0, 0],
			[0, 0, 0],
			[0, 0, 0],
		],
	],
	[
		[
			[0, 0, 0],
			[0, 0, 0],
			[0, 0, 0],
		],
		[
			[0, 0, 0],
			[0, 0, 0],
			[0, 0, 0],
		],
		[
			[0, 0, 0],
			[0, 0, 0],
			[0, 0, 0],
		],
	],
	[
		[
			[0, 0, 0],
			[0, 0, 0],
			[0, 0, 0],
		],
		[
			[0, 0, 0],
			[0, 0, 0],
			[0, 0, 0],
		],
		[
			[0, 0, 0],
			[0, 0, 0],
			[0, 0, 0],
		],
	],
];

function setFirstBlocks(blocks) {
	let allOptions = listThisUpTo(1, 9);

	function randonizeThisBlock(block) {
		let thisOptions = [...allOptions];

		function getRandom() {
			let randomIndex = Math.floor(Math.random() * thisOptions.length);
			let random = thisOptions[randomIndex];
			thisOptions.splice(randomIndex, 1);
			return random;
		}

		for (let row = 0; row < 3; row++) {
			for (let column = 0; column < 3; column++) {
				block[row][column] = getRandom();
			}
		}

		return block;
	}

	for (let diagonal = 0; diagonal < 3; diagonal++) {
		blocks[diagonal][diagonal] = randonizeThisBlock(
			blocks[diagonal][diagonal]
		);
	}

	return blocks;
}

function getRow(blocks, rowBlock, row) {
	let thisRow = [];

	for (let columnBlock = 0; columnBlock < 3; columnBlock++) {
		for (let column = 0; column < 3; column++) {
			if (blocks[rowBlock][columnBlock][row][column])
				thisRow.push(blocks[rowBlock][columnBlock][row][column]);
		}
	}

	return thisRow;
}

function getColumn(blocks, columnBlock, column) {
	let thisColumn = [];

	for (let rowBlock = 0; rowBlock < 3; rowBlock++) {
		for (let row = 0; row < 3; row++) {
			if (blocks[rowBlock][columnBlock][row][column])
				thisColumn.push(blocks[rowBlock][columnBlock][row][column]);
		}
	}

	return thisColumn;
}

function getBlock(blocks, rowBlock, columnBlock) {
	let thisBlock = [];

	for (let row = 0; row < 3; row++) {
		for (let column = 0; column < 3; column++) {
			if (blocks[rowBlock][columnBlock][row][column])
				thisBlock.push(blocks[rowBlock][columnBlock][row][column]);
		}
	}

	return thisBlock;
}

function addToInvalid(arrayToAdd, valuesArray) {
	if (valuesArray == undefined) return;
	if (valuesArray) {
		for (let num of valuesArray) {
			if (arrayToAdd.includes(num)) continue;
			arrayToAdd.push(num);
		}
	}
}

function getInvalidNumbers(blocks, rowBlock, columnBlock, row, column) {
	const invalid = [];

	addToInvalid(invalid, [
		...getRow(blocks, rowBlock, row),
		...getColumn(blocks, columnBlock, column),
		...getBlock(blocks, rowBlock, columnBlock),
	]);

	return invalid;
}

function getValidNumbers(blocks, rowBlock, columnBlock, row, column) {
	const invalids = getInvalidNumbers(
		blocks,
		rowBlock,
		columnBlock,
		row,
		column
	);

	const valid = [];

	for (let num = 1; num <= 9; num++) {
		if (!invalids.includes(num)) {
			valid.push(num);
		}
	}
	return valid;
}

function getValidList(blocksList) {
	const validList = [];

	for (let rowBlock = 0; rowBlock < 3; rowBlock++) {
		for (let columnBlock = 0; columnBlock < 3; columnBlock++) {
			if (!(rowBlock == columnBlock)) {
				for (let row = 0; row < 3; row++) {
					for (let column = 0; column < 3; column++) {
						validList.push([
							getValidNumbers(
								blocksList,
								rowBlock,
								columnBlock,
								row,
								column
							),
							[rowBlock, columnBlock, row, column],
						]);
					}
				}
			}
		}
	}

	return validList;
}

function randomItemOfList(list) {
	return list[Math.floor(Math.random() * list.length)];
}

function removeThisNumberFromOptions(
	optionsList,
	rowBlock,
	columnBlock,
	row,
	column,
	value
) {
	let index = 0;
	for (let [
		numbers,
		[thisRowBlock, thisColumnBlock, thisRow, thisColumn],
	] of optionsList) {
		if (
			(thisRowBlock == rowBlock && thisColumnBlock == columnBlock) ||
			(thisRowBlock == rowBlock && thisRow == row) ||
			(thisColumnBlock == columnBlock && thisColumn == column)
		) {
			if (optionsList[index][0].includes(value)) {
				if (optionsList[index][0].length == 1) {
					optionsList.splice(index, 1);
					index--;
				} else {
					optionsList[index][0].splice(
						optionsList[index][0].indexOf(value),
						1
					);
				}
			}
		}
	}
	return optionsList;
}

function setAnotherBlocks(blocks) {
	let optionsList = getValidList([...blocks]);

	function addFirstEmpty() {
		const value = randomItemOfList(optionsList[0][0]);
		const [rowBlock, columnBlock, row, column] = optionsList[0][1];
		blocks[rowBlock][columnBlock][row][column] = value;
		optionsList.splice(0, 1);
		optionsList = removeThisNumberFromOptions(
			optionsList,
			rowBlock,
			columnBlock,
			row,
			column,
			value
		);
		if (optionsList.length) {
			return addWithOneOption();
		}
	}

	function addWithOneOption() {
		for (let [option, locs] of optionsList) {
			if (option.length == 1) {
				const [rowBlock, columnBlock, row, column] = locs;
				const value = option[0];
				console.log(rowBlock, columnBlock, row, column);
				blocks[rowBlock][columnBlock][row][column] = value;
				optionsList = removeThisNumberFromOptions(
					optionsList,
					rowBlock,
					columnBlock,
					row,
					column,
					value
				);
			}
		}
		if (optionsList.length) {
			return addFirstEmpty();
		}
	}

	addFirstEmpty();
	return blocks;
}

function showGame(blocks) {
	const matriz = createEmptyMatriz();
	for (let i = 0; i < 3; i++) {
		for (let j = 0; j < 3; j++) {
			for (let k = 0; k < 3; k++) {
				for (let l = 0; l < 3; l++) {
					matriz[i * 3 + j][k * 3 + l] = blocks[i][k][j][l];
				}
			}
		}
	}
	console.table(matriz);
}

export default function generateRandomGameBlock() {
	let blocks = [...blocksPattern];
	blocks = setFirstBlocks(blocks);
	blocks = setAnotherBlocks(blocks);

	showGame(blocks);
}

generateRandomGameBlock();

//https://sudoku-api.vercel.app/