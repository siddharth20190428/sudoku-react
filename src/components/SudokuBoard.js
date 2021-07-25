import React from "react";
import { actionTypes } from "../reducer";
import { useStateValue } from "../StateProvider";

const SudokuBoard = () => {
  const [{ board }, dispatch] = useStateValue();
  const onSelect = (row, col) => {
    dispatch({
      type: actionTypes.setSelectedCell,
      selectedCell: { row, col },
    });
  };
  return (
    <div className="board">
      {/* nr = normal row, nc = normal column */}
      {board.map((rowArray, rowIndex) => {
        return (
          <div
            key={`row-${rowIndex}`}
            className={`row ${
              rowIndex !== 8 ? (rowIndex % 3 === 2 ? "row-end" : "nr") : ""
            }`}
          >
            {rowArray.map((cell, index) => (
              <div
                key={`cell-${rowIndex}-${index}`}
                className={`col ${
                  index !== 8 ? (index % 3 === 2 ? "col-end" : "nc") : ""
                }`}
                onClick={}
              >
                {cell !== "." ? cell : ""}
              </div>
            ))}
          </div>
        );
      })}
    </div>
  );
};

export default SudokuBoard;
