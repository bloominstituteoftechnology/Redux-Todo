import React from 'react';
// React Redux imports
import { connect } from 'react-redux';
// Actions Imports
import { selectTodo } from '../actions';

function Todos(props) {
  console.log(props.taskIndex);
  return (
    <p onClick={() => props.selectTodo(props.taskIndex)} className="todo">
      {props.todo.value}
    </p>
  );
}

// Puts state in props
const mapStateToProps = state => {
  return {
    todos: state.todos
  };
};

// Connects to Redux store
export default connect(
  mapStateToProps,
  { selectTodo }
)(Todos);
