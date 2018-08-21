import React from "react";

const Todo = props => {
  return (
    <div>
      <span onClick={() => props.handleToggle(props.index)}>
        {props.todo.text}
      </span>
    </div>
  );
};

export default Todo;
