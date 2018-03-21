import React from "react";

const Todo = (props) => (
  <div>
    <div
      onClick={props.onClick}
      style={{
        textDecoration: props.completed ? "line-through" : "none"
      }}
    >
      <strong>{props.value}</strong><br/>
      <span>{props.completed ? 'Completed' : 'Not Completed'}</span>
    </div>
    <button onClick={props.remove}>Remove</button>
  </div>
);

export default Todo;
