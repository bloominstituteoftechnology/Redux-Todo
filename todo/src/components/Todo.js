import React from 'react';
import { connect } from 'react-redux';

import { toggleTodo } from '../actionTypes';
import './TodoList.scss';

class Todo extends React.Component {
  constructor(props) {
    super(props);
  }

  toggleTodo = id => {
    this.props.toggleTodo(id);
  };

  render() {
    return (
      <li
        className={`${this.props.todo.complete ? 'complete' : ''}`}
        onClick={() => this.toggleTodo(this.props.todo.id)}
      >
        {this.props.todo.todo}
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
  { toggleTodo }
)(Todo);
