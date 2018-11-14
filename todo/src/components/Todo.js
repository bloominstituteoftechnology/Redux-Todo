import React from 'react';

const Todo = props => {
  return (
    <p className="todo-item" id={props.id}>{props.text}</p>
  )
}

export default Todo;