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
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1:hover {
    filter: invert(30%);
  }
`;

const TodoList = props => {
  //console.log(props.todos); //yay! it's working!
  return (
    <DivTodoList>
      {props.todos.map(t => (
        <Todo key={t.id} todo={t} />
      ))}
    </DivTodoList>
  );
};

const mapStateToProps = state => {
  return {
    todos: state.todos,
  };
};

export default connect(mapStateToProps)(TodoList);
