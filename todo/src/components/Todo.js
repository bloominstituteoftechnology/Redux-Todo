import React from "react";

const Todo = props => (
  <li
    key={props.id}
    id={props.id}
    // onClick={() => props.handleCompleted(props.id)}
    style={props.completed ? { textDecoration: "line-through" } : null}
  >
    {props.task}
  </li>
);

export default Todo;
