import React from 'react'
import { Item } from '../styles/Todo'

const Todo = ({ id, value, completed, toggleTodo }) => (
  <Item completed={completed} onClick={() => toggleTodo(id)}>
    {value}
  </Item>
)

export default Todo
