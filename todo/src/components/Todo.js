import React from 'react';

const Todo = (props) => {
  console.log(props.todo)
  return (
    <div>
      <h3> {props.todo.name}</h3>
    </div>
  )
}

export default Todo;
