import React from 'react';

const Todo = ({ todo }) => {
  return (
    <div>
      <p>{todo.value}</p>
    </div>
  )
}

export default Todo;