import React from "react";
import List from "./List";
import AddTodo from "./AddTodo";
export default function Todo(props) {
  return (
    <div className="list-wrapper">
      <h1>ToDoList</h1>
      <AddTodo />
      <List />
    </div>
  );
}
