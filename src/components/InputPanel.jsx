import "./Board.css";
import { actionTypes } from "../reducer";
import { useStateValue } from "../StateProvider";

const InputPanel = () => {
  const [{ board, selectedCell, solvedBoard }, dispatch] = useStateValue();

  // console.log(selectedCell.currVal);

  const setNum = (e) => {
    let newBoard = [...board];
    let row = selectedCell.row;
    let col = selectedCell.col;

    if (selectedCell.currVal === "") {
      newBoard[row][col] = e.target.innerHTML;
    }

    if (solvedBoard[row][col] === e.target.innerHTML) {
      console.log("correct");
    } else {
      console.log("F");
    }

    dispatch({
      type: actionTypes.setBoard,
      board: newBoard,
    });
  };

  // const event = (row, col) => {
  //   dispatch({
  //     type: actionTypes.setSelectedCell,
  //     cell: { row, col },
  //   });
  // };

  // console.log(event);

  const numpadArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  return (
    <>
      <div className="inputContainer">
        <div className="actionIcon">
          <i className="fa fa-eraser" aria-hidden="true"></i>
          <i className="fa fa-pencil" aria-hidden="true"></i>
          <i className="fa fa-undo fa-1.5x circle-icon"></i>
        </div>
        <div className="numPad">
          {numpadArr.map((val, i) => (
            <div key={i} onClick={(e) => setNum(e)}>
              {val}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default InputPanel;
