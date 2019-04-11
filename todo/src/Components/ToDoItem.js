import React, { Component } from "react";
import { connect } from "react-redux";
import { deleteToDo, toggleCompleted } from "../actions";

class ToDoItem extends Component {
  constructor(props) {
    super(props);
  }

  handleToggleCompleted = () => {
    this.props.toggleCompleted(this.props.index);
  };

  render() {
    return (
      <div>
        <h2
          onClick={this.handleToggleCompleted}
          style={this.props.todo.completed ? { color: "red" } : null}
        >
          {this.props.todo.value}
        </h2>
        <button onClick={() => this.props.deleteToDo(this.props.index)}>
          Delete!
        </button>
      </div>
    );
  }
}

export default connect(
  null,
  { toggleCompleted, deleteToDo }
)(ToDoItem);
