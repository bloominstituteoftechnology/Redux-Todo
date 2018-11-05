import React from "react";
import "./Todo.css";

const Todo = props => {
  return (
    <div className="todo">
      <div
        className="delete"
        onClick={event => props.deleteHandler(event, props.id)}
      >
        X
      </div>
      <li
        onClick={event => props.clickHandler(event, props.id)}
        className="list-item"
      >
        {props.item}
      </li>
    </div>
  );
};
export default Todo;
