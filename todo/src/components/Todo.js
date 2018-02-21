import React from 'react';
import { toggleTodo, deleteTodo } from '../actions';
import { connect } from 'react-redux';

class Todo extends React.Component {

  toggleTodo(event) {
    this.props.toggleTodo(this.props.index);
  }

  deleteTodo(event) {
    this.props.deleteTodo(this.props.index);
  }

  render() {
    return (
      <li>
        <input
          type='checkbox'
          onChange={this.toggleTodo.bind(this)}
        />
      {this.props.todo.value}
        <button
          onClick={() => {this.deleteTodo()}}
        >
        Delete
        </button>
      </li>
    );
  }
}

export default connect(null, { toggleTodo, deleteTodo })(Todo);
