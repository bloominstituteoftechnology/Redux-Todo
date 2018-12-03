import React from 'react';
import styled from 'styled-components';
import Todo from './Todo';
import {connect} from 'react-redux';

const DivTodoList = styled.div`
  margin: 10px auto;
  width: 60%;
  border: 1px solid black;
  border-radius: 5px;
  background-color: black;
  color: white;
`;

const TodoList = props => {
  console.log(props.todos);
  return (
    <DivTodoList>
      <h1>todolist</h1>
      <Todo todo="test!" />
    </DivTodoList>
  );
};

const mapStateToProps = state => {
  return {
    todos: state.todos,
  };
};

export default connect(mapStateToProps)(TodoList);
