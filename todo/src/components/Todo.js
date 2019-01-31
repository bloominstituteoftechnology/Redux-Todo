import React from "react";
import { connect } from "react-redux";

import { strikeTodo } from "../actions";

class Todo extends React.Component {
  strikeTaskById = _ => {
    this.props.strikeTodo(this.props.id);
  };
  render() {
    return (
      <div
        onClick={this.strikeTaskById}
        className={`todos_item${this.props.complete ? " complete" : ""}`}
      >
        {this.props.task}
      </div>
    );
  }
}

const mstp = state => {
  return {};
};

export default connect(
  mstp,
  { strikeTodo: strikeTodo }
)(Todo);
