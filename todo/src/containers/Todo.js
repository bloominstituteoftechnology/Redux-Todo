import React from "react";

const Todo = (props) => (
  <div>
    <div
      onClick={props.onClick}
      style={{
        textDecoration: props.completed ? "line-through" : "none"
      }}
    >
      {props.value}
    </div>
    <button onClick={props.remove}>Remove</button>
  </div>
);

export default Todo;
