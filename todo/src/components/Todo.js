import React from "react";
import { toggleCompleted } from "../actions/action";
import { connect } from "react-redux";

const Todo = props => {
  return (
    <div
      onClick={() => props.toggleCompleted(props.task.id)}
      style={props.task.completed ? { textDecoration: "line-through" } : null}
    >
      {props.task.task}
    </div>
  );
};

export default connect(
  null,
  { toggleCompleted }
)(Todo);
