import React from 'react';

const Todo = props => {
  return (
    <li key={props.id}>{props.text}</li>
  )
}

export default Todo;