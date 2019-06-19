import React from 'react';
import { connect } from 'react-redux';

import { toggleTodo } from '../actionTypes';

class Todo extends React.Component {
  constructor(props) {
    super(props);
  }

  toggleTodo = id => {
    this.props.toggleTodo(id);
  };

  render() {
    return (
      <span
        className={`todo${this.props.todo.completed ? 'complete' : ''}`}
        onClick={this.toggleTodo(this.props.todo.id)}
      >
        {this.props.todo.task}
      </span>
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
