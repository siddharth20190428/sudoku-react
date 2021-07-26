import "./Board.css";
import { actionTypes } from "../reducer";
import { useStateValue } from "../StateProvider";

const InputPanel = () => {
  const [{ board, selectedCell, solvedBoard, initialBoard }, dispatch] =
    useStateValue();

  const setNum = (e) => {
    let newBoard = [...board];
    let row = selectedCell.row;
    let col = selectedCell.col;

    if (
      initialBoard[row][col] !== "" &&
      board[row][col] !== solvedBoard[row][col]
    ) {
      newBoard[row][col] = e.target.innerHTML;
    }

    dispatch({
      type: actionTypes.setBoard,
      board: newBoard,
    });
  };

  const resetBoard = () => {
    let newBoard = JSON.parse(JSON.stringify(initialBoard));

    dispatch({
      type: actionTypes.setBoard,
      board: newBoard,
    });
  };

  const numpadArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  return (
    <>
      <div className="inputContainer">
        <div className="actionIcon">
          <i className="fa-solid fa-rotate-right" aria-hidden="true"></i>
          <i
            onClick={() => resetBoard()}
            className="fa-solid fa-repeat"
          ></i>{" "}
          <i className="fa fa-undo circle-icon"></i>
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
