import React from "react";
import { connect } from "react-redux";

const Todo = props => {
  return (
    <div className="todo-wrapper">
      <div className="todo" key={Math.random()}>> {props.todo.value}</div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    todos: state.todos
  }
};

export default connect(mapStateToProps, {})(Todo);
