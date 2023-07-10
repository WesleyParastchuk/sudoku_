const encodeBoard = board =>
	board.reduce(
		(result, row, i) =>
			result +
			`%5B${encodeURIComponent(row)}%5D${
				i === board.length - 1 ? "" : "%2C"
			}`,
		""
	);

const encodeParams = params =>
	Object.keys(params)
		.map(key => key + "=" + `%5B${encodeBoard(params[key])}%5D`)
		.join("&");

export async function getBoard(difficulty) {
    return await fetch(
		`https://sugoku.onrender.com/board?difficulty=${difficulty}`
	).then(data => {
		return data.json();
	});
}

export async function getSolution(board) {
	return await fetch("https://sugoku.onrender.com/solve", {
		method: "POST",
		body: encodeParams(board),
		headers: { "Content-Type": "application/x-www-form-urlencoded" },
	})
		.then(response => response.json())
		.then(response => {
			return response.solution;
		});
}
//recoil
//query
//setInitGame e roda de games