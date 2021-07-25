import React from "react";
import { actionTypes } from "../reducer";
import { useStateValue } from "../StateProvider";

const SudokuBoard = () => {
  const [{ board, selectedCell }, dispatch] = useStateValue();

  let cellArr = [];

  const addNumberOnClick = (e, row, col) => {
    // add row and col number on click
    // e.target.innerHTML = `<input type="number" max="9" min="1" maxLength="1"/>`;

    // e.target.addEventListener("keydown", console.log(e));

    cellArr.push(e.target);
    e.target.classList.add("highlight");
    // console.log(e.target.innerHTML);

    if (cellArr.length > 1) {
      cellArr[0].classList.remove("highlight");
      cellArr.shift();
    }

    dispatch({
      type: actionTypes.setSelectedCell,
      cell: { row, col },
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
            } `}
          >
            {rowArray.map((cell, index) => {
              let currR = Math.floor(rowIndex / 3),
                currC = Math.floor(index / 3),
                selR = Math.floor(selectedCell.row / 3),
                selC = Math.floor(selectedCell.col / 3);
              let gridArea = selR === currR && selC === currC;
              console.log(gridArea);
              return (
                <div
                  key={`cell-${rowIndex}-${index}`}
                  className={`col ${
                    index !== 8 ? (index % 3 === 2 ? "col-end " : "nc") : ""
                  } ${
                    rowIndex === selectedCell.row && index === selectedCell.col
                      ? "highlight"
                      : ""
                  } ${
                    rowIndex === selectedCell.row ||
                    index === selectedCell.col ||
                    gridArea
                      ? "dim-highlight"
                      : ""
                  }
                `}
                  onClick={(e) => {
                    addNumberOnClick(e, rowIndex, index);
                  }}
                >
                  {cell !== "." ? cell : ""}
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default SudokuBoard;
