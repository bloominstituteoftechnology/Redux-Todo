import React from "react";
import { connect } from "react-redux";

import { deleteTodo } from "../actions";

class Todo extends React.Component {
  deleteTaskById = _ => {
    this.props.deleteTodo(this.props.id);
  };
  render() {
    return (
      <div className="todos_item">
        {this.props.task}
        <span onClick={this.deleteTaskById} className="cross">
          &times;
        </span>
      </div>
    );
  }
}

const mstp = state => {
  return {};
};

export default connect(
  mstp,
  { deleteTodo: deleteTodo }
)(Todo);
