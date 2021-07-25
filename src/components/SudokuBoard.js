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

  let cellArr = [];

  const addNumberOnClick = (e) => {
    // add row and col number on click
    // e.target.innerHTML = `<input type="number" max="9" min="1" maxLength="1"/>`;
    // console.log(e.target);

    // console.log(cellArr);
    cellArr.push(e.target);
    e.target.classList.add("highlight");
    if (cellArr.length > 1) {
      cellArr[0].classList.remove("highlight");
      cellArr.shift();
    }

    // console.log(cellArr[0].classList);
    // console.log(cellArr[0].classList);
    // console.log(cellArr);
    // cellArr = [];
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
                onClick={(e) => {
                  addNumberOnClick(e);
                }}
                // contentEditable={true}
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
