import React from "react";
import { connect } from "react-redux";

import { toggleCompleted, removeTodo } from "../../actions/actions";
import "./Todo.css";

const Todo = props => {
  return (
    <li>
      <div>
        <span
          className={props.completed ? "completed" : null}
          onClick={() => {
            props.toggleCompleted(props.index);
          }}
        >
          {props.value}
        </span>
        <button onClick={() => props.removeTodo(props.index)}>Delete</button>
      </div>
    </li>
  );
};

//doesn't need access to state so pass null into mstp
export default connect(
  null,
  { toggleCompleted, removeTodo }
)(Todo);
