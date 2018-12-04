import React from 'react';
import styled from 'styled-components';

const DivTodo = styled.div`
  margin: 10px;
  padding: 10px;
  background-color: #458345;
  color: white;
`;

export default props => {
  return <DivTodo>{props.todo.task}</DivTodo>;
};
