import React from 'react';
import styled from 'styled-components';
import {toggleCompleted, deleteItem} from '../actions';
import {connect} from 'react-redux';

const DivWrapper = styled.div`
  display: flex;
  padding: 10px;
`;

const DeleteButton = styled.button`
  padding: 20px;
  border-radius: 50%;
  background-color: black;
  border: 1px solid black;
  color: red;

  &:hover {
    background-color: red;
    color: black;
  }
`;

const DivTodo = styled.div`
  margin-right: 10px;
  padding: 15px;
  font-size: 20px;
  border-radius: 5px;
  background-color: #3c963c;
  color: ${props => (props.complete ? '#1b1b1b' : '#ffffff')};
  opacity: ${props => (props.complete ? '.5' : '1')};
  text-decoration: ${props => (props.complete ? 'line-through' : null)};
`;

const Todo = props => {
  console.log('todo:', props);
  return (
    <DivWrapper>
      <DivTodo
        onClick={() => props.toggleCompleted(props.todo.id)}
        complete={props.todo.complete}>
        {props.todo.task}
      </DivTodo>
      <DeleteButton onClick={() => props.deleteItem(props.todo.id)}>
        X
      </DeleteButton>
    </DivWrapper>
  );
};

//const mapDispatchtoProps = dispatch => {
//return {
//toggleCompleted: id => toggleCompleted(id),
//};
//};

export default connect(
  null,
  {toggleCompleted, deleteItem},
)(Todo);
