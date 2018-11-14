import React from 'react';

const Todo = props => {
  return (
    <p className="todo-item" onClick={props.click} style={props.style}>{props.text}</p>
  )
}

export default Todo;