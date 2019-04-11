import React from 'react'

export default function Todo(props) {
  return (
    <div>
      <p>{props.todo.value}, {props.todo.completed ? 'true' : 'false'}</p>
    </div>
  )
}
