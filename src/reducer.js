import SudokuToolCollection from "sudokutoolcollection";
const sudoku = SudokuToolCollection();

const board = sudoku.generator.generate(38);
const solvedBoard = sudoku.solver.solve(board);

export const initialState = {
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
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_SELECTED_CELL":
      return { ...state, selectedCell: action.cell };
    case "SET_BOARD":
      return { ...state, board: action.board };
    default:
      return state;
  }
};

export default reducer;
