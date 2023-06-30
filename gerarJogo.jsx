const allDificults = {
	"very-easy": 38,
	easy: 33,
	medium: 28,
	hard: 24,
	"very-hard": 20,
};

const gameSize = 3;
const [gameBlocks, gameSpaces] = [
	gameSize * gameSize,
	gameSize * gameSize * gameSize * gameSize,
];

export function getRandom(max, min = 0) {
	return Math.floor(Math.random() * (max + 1) - min);
}

const listToX = (max, num = true) => {
	const list = [];
	for (let i = 1; i <= max; i++) {
		list.push(num ? i : "");
	}
	return list;
};

const emptyGame = () => {
	let matriz = [];
	let list = listToX(gameBlocks, false);
	for (let i = 0; i < gameBlocks; i++) {
		matriz.push([...list]);
	}
	return matriz;
};

const createOrdenedGame = () => {
	const matriz = emptyGame();
	for (let i = 0; i < gameBlocks; i++) {
		for (let j = 0; j < gameBlocks; j++) {
			matriz[i][(j + Math.floor(i / gameSize)) % gameBlocks] =
				((i * gameSize + j) % gameBlocks) + 1;
		}
	}
	return matriz;
};

const getRow = (matriz, rowNum) => {
	return matriz[rowNum];
};

const getColumn = (matriz, columnNum) => {
	let thisColumn = [];
	for (let i = 0; i < 9; i++) {
		thisColumn.push(matriz[i][columnNum]);
	}
	return thisColumn;
};

function randonizeRows(matriz) {
	for (let i = 0; i < gameSize; i++) {
		for (let j = 0; j < gameSize; j++) {
			let newLine = getRandom(gameSize - 1);
			if (newLine === j) {
				continue;
			}
			[matriz[i * gameSize + j], matriz[i * gameSize + newLine]] = [
				matriz[i * gameSize + newLine],
				matriz[i * gameSize + j],
			];
		}
	}
	return matriz;
}

function rotateMatriz(thisMatriz) {
	let newMatriz = [];
	for (let i = 0; i < gameBlocks; i++) {
		newMatriz.push(getColumn(thisMatriz, i));
	}
	return newMatriz;
}

function randonizeColumn(matriz) {
	return rotateMatriz(randonizeRows(rotateMatriz(matriz)));
}

const createRandomGame = () => {
	let matriz = createOrdenedGame();
	matriz = randonizeRows(matriz);
	matriz = randonizeColumn(matriz);

	return matriz;
};

export function gerarJogo(dificuldade) {
	console.table(createRandomGame());
	return;
}
