import React from "react";
import { useStateValue } from "../StateProvider";

const SudokuBoard = () => {
  const [{ board }, dispatch] = useStateValue();

  return (
    <div className="board">
      {board.map((row, ind) => {
        return (
          <div
            key={`row-${ind}`}
            className={`row ${
              ind !== 8 ? (ind % 3 === 2 ? "row-end" : "nr") : ""
            }`}
          >
            {row.map((cell, col) => (
              <div
                key={`cell-${ind}-${col}`}
                className={`col ${
                  col !== 8 ? (col % 3 === 2 ? "col-end" : "nc") : ""
                }`}
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
