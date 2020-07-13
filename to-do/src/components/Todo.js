import React from "react";

const Todo = props => {
  return (
    <div>
      <p>{props.todo.value}</p>
    </div>
  );
};

export default Todo;
