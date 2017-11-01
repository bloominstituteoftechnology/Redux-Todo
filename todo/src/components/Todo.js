import React, { Component } from 'react';
import { connect } from 'react-redux';

import { toggleComplete } from '../actions';

class Todo extends Component {
  toggleComplete() {
    this.props.toggleComplete(this.props.index);
  }

  render() {
    return (
      <li>
        <input type="checkbox" onChange={this.toggleComplete.bind(this)} />
        {this.props.todo.value}
      </li>
    );
  }
}

export default connect(null, { toggleComplete })(Todo);