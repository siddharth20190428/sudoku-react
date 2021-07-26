import React, { useState } from "react";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

import "./Board.css";
import { actionTypes } from "../reducer";
import { useStateValue } from "../StateProvider";

const options = ["Easy", "Medium", "Hard"];

function DifficultyMenu() {
  const [{ difficulty }, dispatch] = useStateValue();
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(difficulty);

  const handleClickListItem = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuItemClick = (event, index) => {
    setSelectedIndex(index);
    setAnchorEl(null);

    dispatch({
      type: actionTypes.setDifficulty,
      difficulty: index,
    });
    localStorage.setItem("difficulty", index);
    window.location.reload();
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <List component="nav" aria-label="Device settings">
        <ListItem
          button
          aria-haspopup="true"
          aria-controls="lock-menu"
          aria-label="Change Difficulty"
          onClick={handleClickListItem}
        >
          <ListItemText
            primary=" Change Difficulty 🔽"
            secondary={options[selectedIndex]}
          />
        </ListItem>
      </List>
      <Menu
        id="lock-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {options.map((option, index) => (
          <MenuItem
            key={option}
            selected={index === selectedIndex}
            onClick={(event) => handleMenuItemClick(event, index)}
          >
            {option}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}

const Header = () => {
  return (
    <div className="header">
      <div className="header-left">
        <h2>Team Evolving</h2>
      </div>
      <div className="header-mid">
        <div className="timer">
          <div className="timer-label">00:04:25</div>
        </div>
      </div>
      <div className="header-right">
        <div className="dropdown">{DifficultyMenu()}</div>
      </div>
    </div>
  );
};

export default Header;
