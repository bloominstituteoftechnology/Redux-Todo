import React from 'react';

const Todo = props => {
  return (
    <p className="todo-item" onClick={props.click}>{props.text}</p>
  )
}

export default Todo;