import React from "react";
import { useStateValue } from "../StateProvider";

const SudokuBoard = () => {
  const [{ board }, dispatch] = useStateValue();
<<<<<<< HEAD
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
=======
>>>>>>> b874a14ddb55616192166c1cdb8c8cc8636ed9d8

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
<<<<<<< HEAD
                onClick={(e) => {
                  addNumberOnClick(e);
                }}
                // contentEditable={true}
=======
>>>>>>> b874a14ddb55616192166c1cdb8c8cc8636ed9d8
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
