import React from "react";
import { connect } from "react-redux";

import Todo from "./Todo";

const TodoList = props => {
  return (
    <React.Fragment>
      {props.todos.map((todo, i) => (
        <Todo todo={todo} key={i} id={i} />
      ))}
    </React.Fragment>
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
