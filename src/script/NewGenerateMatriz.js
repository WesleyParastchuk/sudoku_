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

function createBlocks() {
	const blocks = [
		[
			[
				[[], [], []],
				[[], [], []],
				[[], [], []],
			],
			[
				[[], [], []],
				[[], [], []],
				[[], [], []],
			],
			[
				[[], [], []],
				[[], [], []],
				[[], [], []],
			],
		],
		[
			[
				[[], [], []],
				[[], [], []],
				[[], [], []],
			],
			[
				[[], [], []],
				[[], [], []],
				[[], [], []],
			],
			[
				[[], [], []],
				[[], [], []],
				[[], [], []],
			],
		],
		[
			[
				[[], [], []],
				[[], [], []],
				[[], [], []],
			],
			[
				[[], [], []],
				[[], [], []],
				[[], [], []],
			],
			[
				[[], [], []],
				[[], [], []],
				[[], [], []],
			],
		],
	];
	console.log(blocks);

	return blocks;
}

function setFirstBlocks(blocks) {
	function randonizeThisBlock(block) {
		for (let row = 0; row < 3; row++) {
			for (let column = 0; column < 3; column++) {
				block[row][column] = newRandom;
				//***************************************************************** */
			}
		}
	}

	for (let row = 0; row < 3; row++) {
		for (let column = 0; column < 3; column++) {
			blocks[row][column] = randonizeThisBlock(blocks[row][column]);
		}
	}
	return blocks;
}

export default function generateRandomGameBlock() {
	let blocks = createBlocks();
	blocks = setFirstBlocks(blocks);
}

generateRandomGameBlock();
