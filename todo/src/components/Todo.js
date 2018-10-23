import React from "react";
import cancelX from "../x.svg";
import checkbox from "../square.svg";
import checkboxComplete from "../check-square.svg";

const Todo = props => (
  <li key={props.id}>
    {props.task}
    <div className="icons">
      <img
        src={props.completed ? checkboxComplete : checkbox}
        className="left"
        onClick={props.onClick}
        alt="complete-todo"
      />
      <img
        src={cancelX}
        alt={"delete"}
        className="delete-todo"
        onClick={props.deleteTodo}
      />
    </div>
  </li>
);

export default Todo;
