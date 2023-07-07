import { totalBlocks, allDifficults } from "./variables";

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
	for (let row = 0; row < 3; row++) {
		for (let column = 0; column < 3; column++) {
			thisBlock.push(
				matriz[blockRow * 3 + row][blockColumn * 3 + column]
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

export function randomOf(max, min = 0) {
	return Math.floor(Math.random() * (max + 1) - min);
}

export function getAllDifficults() {
	const difficults = [];
	for (let difficult in allDifficults) {
		difficults.push(difficult);
	}
	return difficults;
}

export function title(string) {
	return string.charAt(0).toUpperCase() + string.substring(1).toLowerCase();
}

export function removeDash(string) {
	return string.replaceAll("-", " ");
}

export function calcBlockRow(row) {
	return Math.floor(row / 3);
}

export function calcBlockColumn(column) {
	return Math.floor(column / 3);
}