import React from 'react';


const Todo = props => {
  return (
    <div>
      {props.todo.text}
    </div>
  )
}

export default Todo;