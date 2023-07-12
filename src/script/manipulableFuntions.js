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
				matriz[blockRow * blockSize + row][blockColumn * blockSize + column]
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

export function title(string) {
	return string.charAt(0).toUpperCase() + string.substring(1).toLowerCase();
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
