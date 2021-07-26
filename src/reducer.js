import SudokuToolCollection from "sudokutoolcollection";
const sudoku = SudokuToolCollection();

let difficulty =
  localStorage.getItem("difficulty") !== undefined
    ? +localStorage.getItem("difficulty")
    : 0;

let displayNums = 0;
if (difficulty === 0) {
  displayNums = 38;
} else if (difficulty === 1) {
  displayNums = 30;
} else if (difficulty === 2) {
  displayNums = 25;
}

let board = sudoku.generator.generate(displayNums);
const solvedBoard = sudoku.solver.solve(board);

export const initialState = {
  difficulty: difficulty,
  initialBoard: sudoku.conversions.stringToGrid(board),
  board: sudoku.conversions.stringToGrid(board),
  solvedBoard: sudoku.conversions.stringToGrid(solvedBoard),

  selectedCell: {
    row: 0,
    col: 0,
    currVal: board[0][0],
  },
};

export const actionTypes = {
  setSelectedCell: "SET_SELECTED_CELL",
  setBoard: "SET_BOARD",
  setDifficulty: "SET_DIFFICULTY",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_SELECTED_CELL":
      return { ...state, selectedCell: action.cell };
    case "SET_BOARD":
      return { ...state, board: action.board };
    case "SET_DIFFICULTY":
      return { ...state, difficulty: action.difficulty };
    default:
      return state;
  }
};

export default reducer;
