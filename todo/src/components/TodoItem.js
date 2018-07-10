import React, { Component } from 'react';
import { connect } from 'react-redux';

class TodoItem extends Component {

  render() {
    //console.log(this.props.index)
    return (
      <div>
        <li>
          {this.props.todo.value}
        </li>
        <button type="text" onClick={() => this.props.handleDelete(this.props.index)}>remove</button>
      </div>  
    );
  }
}

export default TodoItem;