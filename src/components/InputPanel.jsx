import "./Board.css";

const InputPanel = () => {
  return (
    <>
      <div className="inputContainer">
          <div className="actionIcon">
        <i class="fa fa-undo fa-1.5x circle-icon" ></i>
        <i class="fa fa-eraser" aria-hidden="true"></i>
        <i class="fa fa-pencil" aria-hidden="true"></i>



</div>
        <div className="numPad">
          <div>1</div>
          <div>2</div>
          <div>3</div>
          <div>4</div>
          <div>5</div>
          <div>6</div>
          <div>7</div>
          <div>8</div>
          <div>9</div>
        </div>
      </div>
    </>
  );
};

export default InputPanel;
