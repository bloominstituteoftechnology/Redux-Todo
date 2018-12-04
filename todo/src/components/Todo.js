import React from 'react';
import styled from 'styled-components';
import {toggleCompleted} from '../actions';
import {connect} from 'react-redux';

const DivTodo = styled.div`
  margin: 10px;
  padding: 10px;
  background-color: #458345;
  color: white;
  text-decoration: ${props => (props.complete ? 'line-through' : null)};
`;

const Todo = props => {
  console.log('todo:', props);
  return (
    <DivTodo
      onClick={() => props.toggleCompleted(props.todo.id)}
      complete={props.todo.complete}>
      {props.todo.task}
    </DivTodo>
  );
};

const mapDispatchtoProps = dispatch => {
  return {
    toggleCompleted: id => toggleCompleted(id),
  };
};

export default connect(
  null,
  {toggleCompleted},
)(Todo);
