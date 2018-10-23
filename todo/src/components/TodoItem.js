import React from 'react'

function TodoItem(props) {
  return (
    <li onClick={() => props.clickHandler(props.todo)} >
      {props.todo.item}
    </li>
  )
}

export default TodoItem
