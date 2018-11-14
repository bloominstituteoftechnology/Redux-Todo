import React from 'react';

const Todo = props => {
  return (
    <p className="todo-item"  id={props.id}>{props.value}</p>
  )
}

export default Todo;