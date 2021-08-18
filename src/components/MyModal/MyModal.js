import React, { useState } from "react";
import "./MyModal.scss";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import { Button, Input } from "@material-ui/core";
import db from "../../firebase";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

const MyModal = ({ id, todo }) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState(todo);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const updateTodo = (e) => {
    e.preventDefault();
    db.collection("todos").doc(id).set(
      {
        todo: input,
      },
      { merge: true }
    );

    setOpen(false);
  };

  return (
    <div>
      <Button
        variant="contained"
        color="primary"
        type="button"
        onClick={handleOpen}
      >
        Edit
      </Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <form onSubmit={updateTodo} className={classes.paper}>
            <Input
              onChange={(e) => setInput(e.target.value)}
              value={input}
            ></Input>
            <Button type="submit" variant="contained" color="primary">
              Save
            </Button>
          </form>
        </Fade>
      </Modal>
    </div>
  );
};

export default MyModal;
