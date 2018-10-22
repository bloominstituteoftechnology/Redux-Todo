import React from 'react'
import { Item } from '../styles/Todo'

const Todo = ({ value, completed }) => (
  <Item completed={completed}>{value}</Item>
)

export default Todo
