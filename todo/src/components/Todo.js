import React from "react";

export default function Todo(props) {
  return <li onClick={() => props.toggleCompleted(props.index)}
            style={props.todo.completed ? {textDecorationLine:'line-through'}: null}>
            {props.todo.value}
        </li>;
}
