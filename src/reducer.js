import SudokuToolCollection from "sudokutoolcollection";
const sudoku = SudokuToolCollection();

const board = sudoku.generator.generate(38);

export const initialState = {
  board: sudoku.conversions.stringToGrid(board),
};

export const actionTypes = {};

const reducer = (state, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default reducer;
