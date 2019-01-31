import React from "react";
import { connect } from "react-redux";

import Todo from "./Todo";

const TodoList = props => {
  return (
    <div className="todos">
      {props.todos.map(todo => {
        return <Todo task={todo.task} id={todo.id} key={todo.id} />;
      })}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    todos: state.todos
  };
};

export default connect(
  mapStateToProps,
  {}
)(TodoList);
