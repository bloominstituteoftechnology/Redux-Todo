import React from "react";
import cancelX from "../x.svg"

const Todo = props => (
  <li
    key={props.id}
    onClick={props.onClick}
    style={props.completed ? { textDecoration: "line-through" } : null}
  >
    {props.task}
    <img src={cancelX} alt={"delete"} className="delete-todo" onClick={props.deleteTodo}/>
  </li>
);

export default Todo;
