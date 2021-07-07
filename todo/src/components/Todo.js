import React from 'react'
import { Item, ItemText, Close } from '../styles/Todo'
import closeIcon from '../icons/close.png'

const Todo = ({ id, value, completed, toggleTodo, deleteTodo }) => (
  <Item>
    <ItemText completed={completed} onClick={() => toggleTodo(id)}>
      {value}
    </ItemText>
    <Close src={closeIcon} alt="close" onClick={() => deleteTodo(id)} />
  </Item>
)

export default Todo
