import {
	getRow,
	getColumn,
	getBlock,
	listThisUpTo,
	randomOf,
	calcBlockColumn,
	calcBlockRow,
} from "./manipulableFuntions";
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

function transformBlockToMatriz(blocks) {
	let matriz = [[], [], [], [], [], [], [], [], []];
	for (let block in blocks) {
		for (let i = 0; i < 3; i++) {
			for (let j = 0; j < 3; j++) {
				matriz[block].push(blocks[Math.floor(block) + i][block % 3][j]);
			}
		}
	}
}

function createInitialBlocks(block) {
	const options = [...listThisUpTo(1, 9)];
	for (let element in block) {
		let randomIndex = Math.floor(Math.random() * options.length);
		block[element] = options[randomIndex];
		options.splice(randomIndex, 1);
	}
	return block;
}

function setThisBlock(block){
	for(let row = 0; row < 3; row++){
		for(let column = 0; column < 3; column++){
			block[row][column] = verify 
		}
	}
	return block;
}

function newCreateRandomMatriz() {
	let matriz = createEmptyMatriz();
	let blocks = [];
	for (let iForBlocks = 0; iForBlocks < 9; iForBlocks++) {
		blocks.push(
			getBlock(
				matriz,
				Math.floor(iForBlocks / 3),
				blocks - Math.floor(iForBlocks / 3) * 3
			)
		);
	}

	blocks[0] = createInitialBlocks(blocks[0]);
	blocks[4] = createInitialBlocks(blocks[4]);
	blocks[8] = createInitialBlocks(blocks[8]);

	for (let i = 0; i < 9; i++) {
		if(i%4 == 0){
			continue;
		}
		blocks[i] = setThisBlock(blocks[i]);
	}

	for (let num of blocks) {
		console.table(num);
	}
}

newCreateRandomMatriz();

// Gerar por blocos, se um deles tiver undefined, ve quais numeros faltou e da prioridade a colocar eles;


/* 
	Modo de fazer:

	Matriz 3x3 com blocos 3x3 em cada um deles

	A diagonal principal é preenchida aleatoriamente

	Restante dos valores é preenchido com base em outros valores derivados dos valores já criados

	O QUE FAZER

	Refatorar código fazendo matrizes quadrimensionais de 3 de espaço cada dimensão
	
*/