import React, { Component } from "react";
import { connect } from "react-redux";

import { toggleComplete } from "../actions";

class Todo extends Component {
  toggleComplete() {
    this.props.toggleComplete(this.props.index);
    console.log(this.props.todo.completed);
  }
  render() {
    return (
      <li className="Todo">
        <input type="checkbox" onChange={this.toggleComplete.bind(this)} />
        {this.props.todo.value}
      </li>
    );
  }
}

export default connect(null, { toggleComplete })(Todo);
//connect takes callback/ second object with all actions, then class passing it to
