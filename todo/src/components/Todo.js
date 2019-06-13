import React from 'react'
const Todo = (props) => {
  console.log('in TODO, todo ', props.todo)
  return <li>{props.todo.value}</li>
}

export default Todo
