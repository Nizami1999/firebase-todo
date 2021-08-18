import React, { useEffect } from "react";
import { InputLabel, Input, Button } from "@material-ui/core";
import "./InputField.scss";
import { useState } from "react";
import db from "../../firebase";
import firebase from "firebase";

function InputField({ setTodoItems }) {
  const [value, setValue] = useState("");

  useEffect(() => {
    db.collection("todos")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setTodoItems(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            todo: doc.data().todo,
          }))
        );
      });
  }, []);

  const submitHandler = (e) => {
    e.preventDefault();

    db.collection("todos").add({
      todo: value,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });

    setValue("");
  };

  return (
    <div className="input-field">
      <form className="d-flex" onSubmit={(e) => submitHandler(e)}>
        <InputLabel htmlFor="my-input">Please type any deal... 🗒️</InputLabel>
        <Input
          onChange={(e) => setValue(e.target.value)}
          value={value}
          id="my-input"
        />
        <Button
          type="submit"
          disabled={!value}
          variant="contained"
          color="primary"
        >
          ADD
        </Button>
      </form>
    </div>
  );
}

export default InputField;
