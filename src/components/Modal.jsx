import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import { useState } from "react";

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 600,
    height: 400,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function SimpleModal({ open, handleOpen, handleClose }) {
  const classes = useStyles();

  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = useState(getModalStyle);

  const reload = () => {
    window.location.reload();
  };

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <div>
        <i className="fa-solid fa-crown fa-2x"></i>
      </div>
      <h2 id="simple-modal-title">You WON !!</h2>
      <p onClick={() => reload()} id="simple-modal-description">
        Play again?
      </p>
    </div>
  );

  return (
    <div>
      <Modal
        className="modal"
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  );
}
