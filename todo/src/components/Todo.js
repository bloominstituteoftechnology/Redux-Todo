import React from "react";
import { connect } from "react-redux";

import { toggleComplete, deleteTodo } from "../actions";

const Todo = props => {
  return (
    <div>
      <p
        onClick={() =>
          props.toggleComplete(props.todo.value, props.todo.completed, props.id)
        }
      >
        {props.todo.value}{" "}
        <i
          className="fas fa-trash-alt"
          onClick={e => props.deleteTodo(e, props.id)}
        />
      </p>
    </div>
  );
};

const mapStateToProps = state => {
  return {};
};

export default connect(
  mapStateToProps,
  { toggleComplete, deleteTodo }
)(Todo);
