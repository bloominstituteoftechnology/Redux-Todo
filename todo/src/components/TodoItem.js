import React from 'react';
import styled from 'styled-components';


const TodoItem = (props) => {
  const { todo } = props;
  return (
    <ItemContainer>
      <Item
        onClick={(e) => props.toggleComplete(e, todo.id)}
        style={{
          textDecoration: todo.completed ? 'line-through' : 'none',
          cursor: "pointer"
        }}
      >
        {todo.value}
      </Item>
      <ItemButton type="submit" onClick={(e) => props.deleteTodo(e, todo.id)}>Delete</ItemButton>
    </ItemContainer>
  );
}

export default TodoItem;