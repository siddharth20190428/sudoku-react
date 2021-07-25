import "./Board.css";

const Header = () => {
  function showDropDown() {}
  return (
    <div className="header">
      <h3>
        Difficulty :{" "}
        <span>
          Easy{" "}
          <i
            className="fa fa-caret-down"
            onClick={showDropDown}
            aria-hidden="true"
          ></i>
        </span>{" "}
        <span className="timmer">
          {" "}
          19:00 <i className="fa fa-pause" aria-hidden="true"></i>
        </span>
      </h3>
    </div>
  );
};

export default Header;
