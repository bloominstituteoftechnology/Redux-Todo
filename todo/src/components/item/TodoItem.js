import React from 'react'
import { StyledItem, ItemContainer, ImportantButton } from './styles';

function TodoItem(props) {
  return (
    <ItemContainer>
      <StyledItem onClick={() => props.clickHandler(props.todo)} completed={props.completed} >
        {props.todo.item}
      </StyledItem>
      <ImportantButton>!</ImportantButton>
    </ItemContainer>
  )
}

export default TodoItem
