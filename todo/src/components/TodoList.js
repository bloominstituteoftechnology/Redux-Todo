import React from 'react';
import styled from 'styled-components';
import Todo from './Todo';
import {connect} from 'react-redux';

const DivTodoList = styled.div`
  margin: 10px auto;
  padding: 20px;
  width: 40%;
  border: 1px solid black;
  border-radius: 100px;
  background-color: #2b2d81;
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
  console.log(props);
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

//const mapDispatchToProps = dispatch => {
//return {
//toggleCompleted: id => dispatch(toggleCompleted(id)),
//};
//};

export default connect(
  mapStateToProps,
  //mapDispatchToProps,
)(TodoList);
