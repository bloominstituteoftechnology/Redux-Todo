import React from 'react';

const Todo = (props) => {
  return <li>Todo: {props.todo.value} Completed: {props.todo.completed}</li>
}

export default Todo;
