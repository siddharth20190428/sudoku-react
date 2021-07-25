import "./Board.css";


const Header = () => {

    function showDropDown(){

    }
    return (
        <div className="header">
        <h3>Difficulty :  <span>Easy  <i class="fa fa-caret-down" onClick={showDropDown} aria-hidden="true"></i>
</span> </h3>
        </div>
    )
}

export default Header