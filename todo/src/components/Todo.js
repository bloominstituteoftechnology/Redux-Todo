import React from "react";

const Todo = props => (
  <li
    key={props.id}
    onClick={props.onClick}
    style={props.completed ? { textDecoration: "line-through" } : null}
  >
    {props.task}
  </li>
);

export default Todo;
