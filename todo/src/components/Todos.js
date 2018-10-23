import React from 'react';
// React Redux imports
import { connect } from 'react-redux';
// Actions Imports
import { selectTodo } from '../actions';

function Todos(props) {
  return (
    <div className="todoCard" onClick={() => props.selectTodo(props.taskIndex)}>
      {!props.todo.completed ? (
        <i className="far fa-circle fa-2x fa-fw check" />
      ) : (
        <i className="far fa-check-circle fa-2x fa-fw check" />
      )}
      <p className="todo">{props.todo.value}</p>
    </div>
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
