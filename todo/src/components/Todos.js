import React from 'react';
import { connect } from 'react-redux';
import { selectTodo } from '../actions';

function Todos(props) {
  console.log(props.taskIndex);
  return (
    <p onClick={() => props.selectTodo(props.taskIndex)} className="todo">
      {props.todo.value}
    </p>
  );
}

const mapStateToProps = state => {
  return {
    todos: state.todos
  };
};

export default connect(
  mapStateToProps,
  { selectTodo }
)(Todos);
