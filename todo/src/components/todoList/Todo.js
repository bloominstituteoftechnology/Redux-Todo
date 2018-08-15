import React from "react";

export default function Todo(props) {
  return <li onClick={() => props.toggleCompleted(props.index)}>{props.todo.value}</li>;
}
