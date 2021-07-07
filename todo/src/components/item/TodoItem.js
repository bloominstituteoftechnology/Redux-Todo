import React from 'react';
import { StyledItem, ItemContainer, ImportantButton } from './styles';

function TodoItem(props) {
  return (
    <ItemContainer>
      <StyledItem
        onClick={() => props.clickHandler(props.todo)}
        completed={props.completed}
        important={props.important}
      >
        {props.todo.item}
      </StyledItem>
      <ImportantButton
        onClick={() => props.importantHandler(props.todo)}
        important={props.important}
      >
        !
      </ImportantButton>
    </ItemContainer>
  );
}

export default TodoItem;
