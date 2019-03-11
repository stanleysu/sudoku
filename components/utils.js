function deepCopy(board) {
	return JSON.parse(JSON.stringify(board));
}

function getDefaultBoard() {
	const DEFAULT_BOARD = [
		[
			{ value: 0, editable: true },
			{ value: 0, editable: true },
			{ value: 8, editable: false },
			{ value: 0, editable: true },
			{ value: 3, editable: false },
			{ value: 0, editable: true },
			{ value: 6, editable: false },
			{ value: 9, editable: false },
			{ value: 0, editable: true }
		],
		[
			{ value: 1, editable: false },
			{ value: 7, editable: false },
			{ value: 6, editable: false },
			{ value: 0, editable: true },
			{ value: 0, editable: true },
			{ value: 9, editable: false },
			{ value: 0, editable: true },
			{ value: 2, editable: false },
			{ value: 3, editable: false }
		],
		[
			{ value: 0, editable: true },
			{ value: 3, editable: false },
			{ value: 0, editable: true },
			{ value: 0, editable: true },
			{ value: 0, editable: true },
			{ value: 0, editable: true },
			{ value: 0, editable: true },
			{ value: 0, editable: true },
			{ value: 0, editable: true }
		],
		[
			{ value: 0, editable: true },
			{ value: 0, editable: true },
			{ value: 0, editable: true },
			{ value: 2, editable: false },
			{ value: 9, editable: false },
			{ value: 1, editable: false },
			{ value: 0, editable: true },
			{ value: 0, editable: true },
			{ value: 7, editable: false }
		],
		[
			{ value: 0, editable: true },
			{ value: 8, editable: false },
			{ value: 0, editable: true },
			{ value: 0, editable: true },
			{ value: 6, editable: false },
			{ value: 0, editable: true },
			{ value: 0, editable: true },
			{ value: 1, editable: false },
			{ value: 0, editable: true }
		],
		[
			{ value: 9, editable: false },
			{ value: 0, editable: true },
			{ value: 0, editable: true },
			{ value: 7, editable: false },
			{ value: 8, editable: false },
			{ value: 4, editable: false },
			{ value: 0, editable: true },
			{ value: 0, editable: true },
			{ value: 0, editable: true }
		],
		[
			{ value: 0, editable: true },
			{ value: 0, editable: true },
			{ value: 0, editable: true },
			{ value: 0, editable: true },
			{ value: 0, editable: true },
			{ value: 0, editable: true },
			{ value: 0, editable: true },
			{ value: 3, editable: false },
			{ value: 0, editable: true }
		],
		[
			{ value: 6, editable: false },
			{ value: 9, editable: false },
			{ value: 0, editable: true },
			{ value: 5, editable: false },
			{ value: 0, editable: true },
			{ value: 0, editable: true },
			{ value: 1, editable: false },
			{ value: 8, editable: false },
			{ value: 4, editable: false }
		],
		[
			{ value: 0, editable: true },
			{ value: 1, editable: false },
			{ value: 5, editable: false },
			{ value: 0, editable: true },
			{ value: 4, editable: false },
			{ value: 0, editable: true },
			{ value: 9, editable: false },
			{ value: 0, editable: true },
			{ value: 0, editable: true }
		]
	];
	return DEFAULT_BOARD;
}

function isBetween1and9(keyCode) {
	return (
		(keyCode >= 49 && keyCode <= 57) ||
		(event.keyCode >= 97 && event.keyCode <= 105)
	);
}

function isBackspaceOrDelete(keyCode) {
	return event.keyCode == 8 || event.keyCode == 56;
}

function getEmptyPencilMarks() {
	var pencilMarks = new Array();
	for (var i = 0; i < 9; i++) {
		pencilMarks[i] = new Array();
		for (var j = 0; j < 9; j++) {
			pencilMarks[i][j] = new Array();
			for (var k = 0; k < 9; k++) {
				pencilMarks[i][j][k] = false;
			}
		}
	}
	return pencilMarks;
}

export {
	deepCopy,
	getDefaultBoard,
	getEmptyPencilMarks,
	isBetween1and9,
	isBackspaceOrDelete
};
