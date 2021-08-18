import React from "react";
import { List, ListItem, ListItemText, Button } from "@material-ui/core";
import "./ItemsList.scss";
import db from "../../firebase";
import MyModal from "../MyModal/MyModal";

function ItemsList({ todoItems }) {
  return (
    <div className="text-center items-list">
      <List>
        {todoItems.map((item) => {
          return (
            <div key={item.id}>
              <ListItem>
                <ListItemText primary={"✅ " + item.todo} />
                <MyModal id={item.id} todo={item.todo} />
                <Button
                  variant="contained"
                  color="secondary"
                  onClick={() => db.collection("todos").doc(item.id).delete()}
                >
                  Delete
                </Button>
              </ListItem>
              <hr />
            </div>
          );
        })}
      </List>
    </div>
  );
}

export default ItemsList;
