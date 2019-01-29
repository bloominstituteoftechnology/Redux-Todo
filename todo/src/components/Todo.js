import React from 'react';

const Todo = props => (
    <li
      style={{
        textDecoration: props.item.completed ? 'line-through' : 'none'
      }}
    >
      {props.item.text}
    </li>
  )

  export default Todo;