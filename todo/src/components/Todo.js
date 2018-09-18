import React from 'react';

const Todo = (props) => {
  return (
    console.log(props),
    (
      <li
        onClick={() => props.toggleComplete(props.todo)}
        style={{
          textDecoration: props.todo.completed ? 'line-through' : 'none',
        }}
      >
        {props.todo.value}
      </li>
    )
  );
};

export default Todo;
