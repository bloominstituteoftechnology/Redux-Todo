import React, { Component } from 'react';
import { toggleComplete } from '../actions';
import { connect } from 'react-redux';

class TodoItem extends Component {

  handleDelete(event) {
    this.props.handleDelete(this.props.index);
  }

  render() {
    return (
      <div>
        <li>
          {this.props.todo.value}
        </li>
        <button type="text" onClick={() => handleDelete(e)}>remove</button>
      </div>  
    );
  }
}

export default connect(null, { handleDelete })(TodoItem);