import { blockSize, totalBlocks } from "./variables";

export function getRow(matriz, rowNum) {
	return matriz[rowNum];
}

export function getColumn(matriz, columnNum) {
	let thisColumn = [];
	for (let i = 0; i < totalBlocks; i++) {
		thisColumn.push(matriz[i][Number(columnNum)]);
	}
	return thisColumn;
}

export function getBlock(matriz, blockRow, blockColumn) {
	let thisBlock = [];
	for (let row = 0; row < blockSize; row++) {
		for (let column = 0; column < blockSize; column++) {
			thisBlock.push(
				matriz[blockRow * blockSize + row][
					blockColumn * blockSize + column
				]
			);
		}
	}
	return thisBlock;
}

export function listThisUpTo(min, max, num = true) {
	const list = [];
	for (let i = min; i <= max; i++) {
		list.push(num ? i : "");
	}
	return list;
}

export function calcBlockRow(row) {
	return Math.floor(row / blockSize);
}

export function calcBlockColumn(column) {
	return Math.floor(column / blockSize);
}

export function getEmptyMatriz() {
	const matriz = [];

	for (let row = 0; row < totalBlocks; row++) {
		matriz.push([]);
		for (let column = 0; column < totalBlocks; column++) {
			matriz[row].push("");
		}
	}

	return matriz;
}

export async function cleanNotes(actual, row, column, value) {
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

	(await getBlock(actual, calcBlockRow(row), calcBlockColumn(column))).map(
		(element, index) => {
			const thisRow =
				calcBlockRow(row) * blockSize + Math.floor(index / blockSize);
			const thisColumn =
				calcBlockColumn(column) * blockSize + (index % blockSize);
			if (
				typeof element == "object" &&
				index != thisRow * blockSize + thisColumn
			) {
				if (element.includes(value)) {
					actual[thisRow][thisColumn][value - 1] = 0;
				}
			}
		}
	);
	return actual;
}

export function isNoteCell(valueToTest) {
	return typeof valueToTest == "object";
}

export async function isValid(matriz, row, column, value) {
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

export function noteIsEmpty(note) {
	let isEmpty = true;
	note.forEach(space => {
		if (space) isEmpty = false;
	});
	return isEmpty;
}
