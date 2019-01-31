import React from 'react';

const Todo = props => {
  return (
    <li onClick={() => props.toggleCompleted(props.index)}>
      {props.todo.value}
    </li>
  );
}

export default Todo;