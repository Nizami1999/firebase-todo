import { Container } from "@material-ui/core";
import React, { useState } from "react";
import Header from "../../Header/Header";
import InputField from "../../InputField/InputField";
import ItemsList from "../../ItemsList/ItemsList";

function Todo() {
  const [todoItems, setTodoItems] = useState([]);

  return (
    <>
      <Container maxWidth="sm">
        <Header />
        <InputField todoItems={todoItems} setTodoItems={setTodoItems} />
        <ItemsList todoItems={todoItems} />
      </Container>
    </>
  );
}

export default Todo;
