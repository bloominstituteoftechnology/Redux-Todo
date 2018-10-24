import React, { Component } from 'react';
import { toggleComplete } from '../actions';
import { connect } from 'react-redux';

class TodoItem extends Component {

  toggleComplete = (event) => {
    this.props.toggleComplete(this.props.index);
  }

  render() {
    return (
      <li>
        {this.props.todo.value}
      </li>
    );
  }
}

export default connect(null, { toggleComplete })(TodoItem);