import React from 'react';

const Todo = props => {
  return (
    <li 
      onClick={() => props.toggleCompleted(props.index)}
      style={{ textDecoration: props.todo.completed ? "line-through" : "none" }}>
      {props.todo.value}
    </li>
  );
}

export default Todo;