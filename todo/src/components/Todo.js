import React from 'react'

function Todo(props) {
  return (
    <div className='todo'> 
      <div className='todo-text'>{props.todo.todoText}</div>
      <div className='todo-button' onClick={props.toggleCompleted} index={props.todo.index} >Completed</div>
      <div className='todo-button'>Clear</div>
    </div>
  )
}

export default Todo;