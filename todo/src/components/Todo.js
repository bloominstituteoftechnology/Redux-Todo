import React from "react";

const Todo = props => {
  return (
    <div>
    <li style={{textDecoration: props.todo.completed ? 'line-through' : 'none'}}>
      <span onClick={() => props.handleToggle(props.index)}>
        {props.todo.text}
      </span>
      </li>
    </div>
  );
};

export default Todo;
