import React, { Component } from "react";
// import { connect } from "react-redux";

class Todo extends Component {
  render() {
    return (
      <div>
        <li onClick={() => this.props.toggleCompleted(this.props.index)}>{this.props.todo.value}</li>
      </div>
    );
  }
}

export default Todo;