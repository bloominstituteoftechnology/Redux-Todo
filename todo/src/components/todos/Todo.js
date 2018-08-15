import React from "react";

const Todo = props => {
  console.log("Todo", props.todo.value);
  return (
    <div>
      <h1>{props.todo.value}</h1>
    </div>
  );
};

export default Todo;
