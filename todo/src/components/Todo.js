import React from 'react';

const Todo = (props) => {
  return (
    console.log(props),
    <li onClick={() => props.toggleComplete(props.todo)}>{props.todo.value}</li>
  );
};

export default Todo;
