import React from "react";
import { connect } from "react-redux";
import Todo from "./Todo";

const TodoContainer = props => {
  props.todos.map(todo => {
    return <Todo todo={todo} />;
  });
};

const mapStateToProps = state => {
  console.log("STATE IN TODO CONTAINER", state);
  return {
    todos: state.todos
  };
};

export default connect(
  mapStateToProps,
  {}
)(TodoContainer);
