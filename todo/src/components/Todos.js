import React from 'react';
import { connect } from 'react-redux';
import { selectTodo } from '../actions';

function Todos(props) {
  return (
    <div>
      <p onClick={() => props.selectTodo(props.taskIndex)}>
        {props.todo.value}
      </p>
    </div>
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
