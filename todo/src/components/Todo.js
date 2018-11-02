import React from 'react';

const Todo = ({ onClick, completed, todo }) => {
  return (
    <li 
      onClick={onClick} 
      style={{textDecoration: completed ? 'line-through' : 'none'}}
    >
      {todo}
    </li>
  )
}

export default Todo;