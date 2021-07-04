import Todo from './Todo';
import React from 'react';
import styled from 'styled-components';

const List = styled.ul `
  width: 300px;
`;

const ListContainer = styled.div `
  display: flex;
  flex-direction: column;
  align-items: center;
`;


const TodoList = (props) => {
  if (props.todos.length === 0)
  {
    return (
      <div>Add a todo!</div>
    )
  }
  else if (props.todos.length !== 0)
  {
    return (
    <ListContainer>
      <p>Single click to strike off</p>
      <p>Double click to remove</p>
      <List>
        {props.todos.map(item => <Todo todo={item} removecompleted={props.removecompleted} completed={props.completed} />)}
      </List>
    </ListContainer>
    )
  }
}

export default TodoList;
