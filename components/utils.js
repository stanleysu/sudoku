function deepCopy(board) {
	return JSON.parse(JSON.stringify(board));
}

function getDefaultBoard() {
	//reference to each cell in board is the same
	// const EMPTY_SQUARE = {value: "1", editable: false}
	// const EMPTY_ROW = Array(9).fill(EMPTY_SQUARE);
	// const EMPTY_BOARD = Array(9).fill(EMPTY_ROW);

	// return EMPTY_BOARD;

	const DEFAULT_BOARD = [
		[{value: null, editable: true},{value: null, editable: true},{value: 8, editable: false},{value: null, editable: true},{value: 3, editable: false},{value: null, editable: true},{value: 6, editable: false},{value: 9, editable: false},{value: null, editable: true}],
		[{value: 1, editable: false},{value: 7, editable: false},{value: 6, editable: false},{value: null, editable: true},{value: null, editable: true},{value: 9, editable: false},{value: null, editable: true},{value: 2, editable: false},{value: 3, editable: false}],
		[{value: null, editable: true},{value: 3, editable: false},{value: null, editable: true},{value: null, editable: true},{value: null, editable: true},{value: null, editable: true},{value: null, editable: true},{value: null, editable: true},{value: null, editable: true}],
		[{value: null, editable: true},{value: null, editable: true},{value: null, editable: true},{value: 2, editable: false},{value: 9, editable: false},{value: 1, editable: false},{value: null, editable: true},{value: null, editable: true},{value: 7, editable: false}],
		[{value: null, editable: true},{value: 8, editable: false},{value: null, editable: true},{value: null, editable: true},{value: 6, editable: false},{value: null, editable: true},{value: null, editable: true},{value: 1, editable: false},{value: null, editable: true}],
		[{value: 9, editable: false},{value: null, editable: true},{value: null, editable: true},{value: 7, editable: false},{value: 8, editable: false},{value: 4, editable: false},{value: null, editable: true},{value: null, editable: true},{value: null, editable: true}],
		[{value: null, editable: true},{value: null, editable: true},{value: null, editable: true},{value: null, editable: true},{value: null, editable: true},{value: null, editable: true},{value: null, editable: true},{value: 3, editable: false},{value: null, editable: true}],
		[{value: 6, editable: false},{value: 9, editable: false},{value: null, editable: true},{value: 5, editable: false},{value: null, editable: true},{value: null, editable: true},{value: 1, editable: false},{value: 8, editable: false},{value: 4, editable: false}],
		[{value: null, editable: true},{value: 1, editable: false},{value: 5, editable: false},{value: null, editable: true},{value: 4, editable: false},{value: null, editable: true},{value: 9, editable: false},{value: null, editable: true},{value: null, editable: true}]
	]
	return DEFAULT_BOARD;
}

function isBetween1and9(keyCode){
	return (keyCode >= 49 && keyCode <= 57) || (event.keyCode >= 97 && event.keyCode <= 105);
}

function isBackspaceOrDelete(keyCode){
	return (event.keyCode == 8 || event.keyCode == 56);
}

export {deepCopy, getDefaultBoard, isBetween1and9, isBackspaceOrDelete};