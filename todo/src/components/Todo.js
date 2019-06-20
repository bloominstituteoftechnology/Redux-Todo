import React from 'react';
import { connect } from 'react-redux';

import { toggleTodo, deleteTodo } from '../actionTypes';
import './TodoList.scss';

class Todo extends React.Component {
  toggleTodo = id => {
    this.props.toggleTodo(id);
  };

  deleteTodo = id => {
    this.props.deleteTodo(id);
  };

  render() {
    return (
      <li className={`${this.props.todo.complete ? 'complete' : ''}`}>
        <span
          className='todo-task'
          onClick={() => this.toggleTodo(this.props.todo.id)}
        >
          {this.props.todo.todo}
        </span>
        <button
          className='delete-button'
          onClick={() => this.deleteTodo(this.props.todo.id)}
        >
          X
        </button>
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
