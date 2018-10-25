import React from 'react'
import { StyledItem } from './styles';

function TodoItem(props) {
  return (
    <StyledItem onClick={() => props.clickHandler(props.todo)} completed={props.completed} >
      {props.todo.item}
    </StyledItem>
  )
}

export default TodoItem
