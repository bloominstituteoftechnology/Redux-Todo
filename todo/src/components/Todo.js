import React from 'react';
import { toggleTodo } from '../actions';
import { connect } from 'react-redux';

class Todo extends React.Component {

  toggleTodo(event) {
    this.props.toggleTodo(this.props.index);
  }

  render() {
    return (
      <li>
        <input
          type='checkbox'
          onChange={this.toggleTodo.bind(this)}
        />
      {this.props.todo.value}
      </li>
    );
  }
}

export default connect(null, { toggleTodo })(Todo);
