import React from 'react';
import { connect } from 'react-redux';

import { toggleTodo, deleteTodo } from '../actionTypes';
import './TodoList.scss';

class Todo extends React.Component {
  constructor(props) {
    super(props);
  }

  toggleTodo = id => {
    this.props.toggleTodo(id);
  };

  deleteTodo = id => {
    this.props.deleteTodo(id);
  };

  render() {
    return (
      <li>
        <span
          className={`${this.props.todo.complete ? 'complete' : ''}`}
          onClick={() => this.toggleTodo(this.props.todo.id)}
        >
          {this.props.todo.todo}
        </span>
        <button onClick={() => this.deleteTodo(this.props.todo.id)}>X</button>
      </li>
    );
  }
}

const mapStateToProps = state => {
  return {
    todos: state.todos
  };
};

export default connect(
  mapStateToProps,
  { toggleTodo, deleteTodo }
)(Todo);
