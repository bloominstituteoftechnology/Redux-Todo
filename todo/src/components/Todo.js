import React from 'react';

export const Todo = props => {
  return (
    <p className="todo-item" id={props.id}>{props.value}</p>
  )
}