function deepCopy(board) {
	return JSON.parse(JSON.stringify(board));
}

function getDefaultBoard() {
	//reference to each cell in board is the same
	// const EMPTY_SQUARE = {value: "1", editable: false}
	// const EMPTY_ROW = Array(9).fill(EMPTY_SQUARE);
	// const EMPTY_BOARD = Array(9).fill(EMPTY_ROW);

	// return EMPTY_BOARD;

	const EMPTY_BOARD = [
		[{value: "1", editable: true},{value: "0", editable: false},{value: "1", editable: false},{value: "1", editable: false},{value: "1", editable: false},{value: "1", editable: false},{value: "1", editable: false},{value: "1", editable: false},{value: "1", editable: false}],
		[{value: "1", editable: false},{value: "1", editable: false},{value: "1", editable: false},{value: "1", editable: false},{value: "1", editable: false},{value: "1", editable: false},{value: "1", editable: false},{value: "1", editable: false},{value: "1", editable: false}],
		[{value: "1", editable: false},{value: "1", editable: false},{value: "1", editable: false},{value: "1", editable: false},{value: "1", editable: false},{value: "1", editable: false},{value: "1", editable: false},{value: "1", editable: false},{value: "1", editable: false}],
		[{value: "1", editable: false},{value: "1", editable: false},{value: "1", editable: false},{value: "1", editable: false},{value: "1", editable: false},{value: "1", editable: false},{value: "1", editable: false},{value: "1", editable: false},{value: "1", editable: false}],
		[{value: "1", editable: false},{value: "1", editable: false},{value: "1", editable: false},{value: "1", editable: false},{value: "1", editable: false},{value: "1", editable: false},{value: "1", editable: false},{value: "1", editable: false},{value: "1", editable: false}],
		[{value: "1", editable: false},{value: "1", editable: false},{value: "1", editable: false},{value: "1", editable: false},{value: "1", editable: false},{value: "1", editable: false},{value: "1", editable: false},{value: "1", editable: false},{value: "1", editable: false}],
		[{value: "1", editable: false},{value: "1", editable: false},{value: "1", editable: false},{value: "1", editable: false},{value: "1", editable: false},{value: "1", editable: false},{value: "1", editable: false},{value: "1", editable: false},{value: "1", editable: false}],
		[{value: "1", editable: false},{value: "1", editable: false},{value: "1", editable: false},{value: "1", editable: false},{value: "1", editable: false},{value: "1", editable: false},{value: "1", editable: false},{value: "1", editable: false},{value: "1", editable: false}],
		[{value: "1", editable: false},{value: "1", editable: false},{value: "1", editable: false},{value: "1", editable: false},{value: "1", editable: false},{value: "1", editable: false},{value: "1", editable: false},{value: "1", editable: false},{value: "1", editable: false}]
	]
	return EMPTY_BOARD
}

function isBetween1and9(keyCode){
	return (keyCode >= 49 && keyCode <= 57) || (event.keyCode >= 97 && event.keyCode <= 105);
}

function isBackspaceOrDelete(keyCode){
	return (event.keyCode == 8 || event.keyCode == 56);
}

export {deepCopy, getDefaultBoard, isBetween1and9, isBackspaceOrDelete};