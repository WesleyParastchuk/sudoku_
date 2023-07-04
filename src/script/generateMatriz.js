import { getColumn, listThisUpTo, randomOf } from "./manipulableFuntions";
import { blockSize, totalBlocks } from "./variables";

export function createEmptyMatriz() {
	const matriz = [];
	let emptyList = listThisUpTo(1, totalBlocks, false);
	for (let lines = 0; lines < totalBlocks; lines++) {
		matriz.push([...emptyList]);
	}
	return matriz;
}


function createSemiOrdenedMatriz() {
	const matriz = createEmptyMatriz();
	for (let blockRow = 0; blockRow < blockSize; blockRow++) {
		for (let blockColumn = 0; blockColumn < blockSize; blockColumn++) {
			for (let row = 0; row < blockSize; row++) {
				for (let column = 0; column < blockSize; column++) {
					const thisRow = blockRow * 3 + ((row + blockColumn) % 3);
					const thisColumn =
						blockColumn * 3 + ((column + blockRow) % 3);
					matriz[thisRow][thisColumn] = column + row * 3 + 1;
				}
			}
		}
	}
	return matriz;
}

function rotateMatriz(thisMatriz) {
	let newMatriz = [];
	for (let actualColumn = 0; actualColumn < totalBlocks; actualColumn++) {
		newMatriz.push(getColumn(thisMatriz, actualColumn));
	}
	return newMatriz;
}

function randonizeRows(matriz) {
	for (let thisRow = 0; thisRow < totalBlocks; thisRow++) {
		const newRow =
			randomOf(blockSize - 1) +
			Math.floor(thisRow / blockSize) * blockSize;
		if (thisRow == newRow) continue;
		[matriz[thisRow], matriz[newRow]] = [matriz[newRow], matriz[thisRow]];
	}
	return matriz;
}

function randonizeColunms(matriz) {
	matriz = rotateMatriz(matriz);
	for (let thisColumn = 0; thisColumn < blockSize; thisColumn++) {
		const newColumn = randomOf(blockSize - 1) * blockSize + thisColumn;
		if (thisColumn == newColumn) continue;
		[matriz[thisColumn], matriz[newColumn]] = [
			matriz[newColumn],
			matriz[thisColumn],
		];
	}
	return rotateMatriz(matriz);
}

function randonizeMatriz(matriz) {
	//Dois "for" separados pois juntos eles quebram o algoritmo de aleatoriezação. Número elevado de repetioções para garantir um valor realmente aleatório.
	for (let totalTimes = 0; totalTimes < totalBlocks; totalTimes++) {
		matriz = randonizeRows(matriz);
	}
	for (let totalTimes = 0; totalTimes < totalBlocks; totalTimes++) {
		matriz = randonizeColunms(matriz);
	}
	return matriz;
}

export function createRandomMatriz() {
	return randonizeMatriz(createSemiOrdenedMatriz());
}
