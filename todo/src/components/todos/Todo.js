import React from "react";

const Todo = props => {
  console.log("Todo", props);
  return (
    <div>
      <h1>{props.todo}</h1>
    </div>
  );
};

export default Todo;
