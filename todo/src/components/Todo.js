import React from 'react'


function Todo(props) {
  console.log(props);
  return (
    <div className='todo'> 
      <div className='todo-text'>{props.todoText.todo}</div>
      <div className='todo-button'>Completed</div>
      <div className='todo-button'>Clear</div>
    </div>
  )
}

export default Todo;