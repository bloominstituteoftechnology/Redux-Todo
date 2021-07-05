import React from 'react';
// React Redux imports
import { connect } from 'react-redux';
// Actions Imports
import { selectTodo, deleteTodo } from '../actions';

function Todos(props) {
  return (
    <div className="todoCard">
      {!props.todo.completed ? (
        <i
          className="far fa-circle fa-2x fa-fw check"
          onClick={() => props.selectTodo(props.taskIndex)}
        />
      ) : (
        <i
          className="far fa-check-circle fa-2x fa-fw check complete"
          onClick={() => props.selectTodo(props.taskIndex)}
        />
      )}
      <p className="todo">{props.todo.value}</p>
      <i
        className="fas fa-trash-alt fa-fw deleteIcon"
        onClick={() => props.deleteTodo(props.taskIndex)}
      />
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
  { selectTodo, deleteTodo }
)(Todos);
