import { actionTypes } from "../reducer";
import { useStateValue } from "../StateProvider";
import { useStopwatch } from "react-timer-hook";

function pad0(value) {
  return value.toString().padStart(2, "0");
}

const InputPanel = () => {
  const [{ board, selectedCell, solvedBoard, initialBoard }, dispatch] =
    useStateValue();

  const { seconds, minutes, hours, isRunning, start, pause, reset } =
    useStopwatch({
      autoStart: true,
    });

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
    reset();
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
          <div className="timer">
            <div className="timer-label">
              <span>{pad0(hours)}</span>:<span>{pad0(minutes)}</span>:
              <span>{pad0(seconds)}</span>
            </div>
          </div>

          {isRunning ? (
            <i onClick={pause} className="fa-solid fa-circle-pause"></i>
          ) : (
            <i onClick={start} className="fa-solid fa-play"></i>
          )}

          <i onClick={() => resetBoard()} className="fa-solid fa-repeat"></i>
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
