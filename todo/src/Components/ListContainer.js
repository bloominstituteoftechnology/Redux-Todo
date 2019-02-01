import React from "react";
import List from "./List";
export default function Todo(props) {
  return (
    <div className="list-wrapper">
      <h1>ToDoList</h1>
      <List list={props.list} />
    </div>
  );
}
