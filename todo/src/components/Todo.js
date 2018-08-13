import React from "react";
import { connect } from "react-redux";
import * as actions from "../actions";

const Todo = ({ todo, toggleCompleted, deleteTodo }) => {
  return (
    <div>
      <p
        style={{ textDecoration: todo.completed ? "line-through" : "none" }}
        onClick={() => toggleCompleted(todo.id)}
      >
        {todo.value}
      </p>
      <button onClick={() => deleteTodo(todo.id)}>Delete</button>
    </div>
  );
};

export default connect(
  null,
  actions
)(Todo);
