import React from "react";

import { addTodo, deleteTodo } from "../actions";
import { connect } from "react-redux";

const TodoList = props => {
  return (
    <div>
      {props.todos.map(todo => {
        if (todo.completed) {
          return (
            <p key={todo.id}>
              {todo.task}{" "}
              <button
                onClick={() => {
                  props.deleteTodo(todo);
                }}
              >
                {" "}
                Delete
              </button>
            </p>
          );
        } else {
          return (
            <p key={todo.id}>
              {todo.task}{" "}
              <button
                onClick={() => {
                  props.deleteTodo(todo);
                }}
              >
                Delete
              </button>
            </p>
          );
        }
      })}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    todos: state
  };
};

export default connect(
  mapStateToProps,
  { addTodo, deleteTodo }
)(TodoList);
