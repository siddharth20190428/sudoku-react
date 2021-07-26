import React, { useState } from "react";
import { actionTypes } from "../reducer";
import { useStateValue } from "../StateProvider";
import SimpleModal from "./Modal";

const SudokuBoard = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [{ board, selectedCell, initialBoard, solvedBoard }, dispatch] =
    useStateValue();

  let cellArr = [];

  if (JSON.stringify(board) === JSON.stringify(solvedBoard)) {
    console.log("you won");
    setTimeout(() => {
      setOpen(true);
    }, 2000);
  }

  const addNumberOnClick = (e, row, col) => {
    cellArr.push(e.target);
    e.target.classList.add("highlight");

    if (cellArr.length > 1) {
      cellArr[0].classList.remove("highlight");
      cellArr.shift();
    }

    const currVal = e.target.innerHTML;

    dispatch({
      type: actionTypes.setSelectedCell,
      cell: { row, col, currVal },
    });
  };

  return (
    <div className="board">
      {/* nr = normal row, nc = normal column */}
      {open ? (
        <SimpleModal
          open={open}
          handleClose={handleClose}
          handleOpen={handleOpen}
        />
      ) : (
        board.map((rowArray, rowIndex) => {
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

                // let myStyle = {};

                // if (selectedCell.correct === "1") {
                //   myStyle = {
                //     backgroundColor: "green",
                //   };
                // } else if (selectedCell.correct === "0") {
                //   myStyle = {
                //     color: "red",
                //   };
                // }

                return (
                  <div
                    // style={myStyle}
                    key={`cell-${rowIndex}-${index}`}
                    className={`col ${
                      index !== 8 ? (index % 3 === 2 ? "col-end " : "nc") : ""
                    } ${
                      rowIndex === selectedCell.row &&
                      index === selectedCell.col
                        ? "highlight"
                        : ""
                    } ${
                      rowIndex === selectedCell.row ||
                      index === selectedCell.col ||
                      gridArea
                        ? "dim-highlight"
                        : ""
                    } ${
                      initialBoard[rowIndex][index] === "." &&
                      board[rowIndex][index] === solvedBoard[rowIndex][index]
                        ? "correct"
                        : ""
                    } ${
                      selectedCell.currVal !== "." &&
                      cell === selectedCell.currVal
                        ? "num-highlight"
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
        })
      )}
    </div>
  );
};

export default SudokuBoard;
