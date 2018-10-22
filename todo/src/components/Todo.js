import React from 'react';


const Todo = props => {
  return (
    <div className='todo'>
      <p>{props.todo.value}</p>
    </div>
  )
}
export default Todo;
