import React from "react";

const Todo = props => {
  console.log("Todo", props);
  return (
    <div
      onClick={() => props.toggleCompletedStyle(props)}
      style={{ cursor: "pointer" }}
    >
      <h1>{props.todo.value}</h1>
    </div>
  );
};

export default Todo;
