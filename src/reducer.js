import SudokuToolCollection from "sudokutoolcollection";
const sudoku = SudokuToolCollection();

const board = sudoku.generator.generate(38);

export const initialState = {
  board: sudoku.conversions.stringToGrid(board),
  selectedCell: { row: 0, col: 0 },
};

export const actionTypes = {
  setSelectedCell: "SET_SELECTED_CELL",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_SELECTED_CELL":
      console.log({ ...state, selectedCell: action.cell });
      return { ...state, selectedCell: action.cell };

    default:
      return state;
  }
};

export default reducer;
