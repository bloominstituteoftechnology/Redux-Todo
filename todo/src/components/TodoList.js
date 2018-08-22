import React from "react";
import { connect } from "react-redux";

import Todo from "./Todo";
import TodoInput from "./TodoInput";
const TodoList = props => {
  return (
    <div>
      <TodoInput />
    </div>
  );
};

const mapStateToProps = state => {
  return {
    todoData: state.todos
  };
};

export default connect(mapStateToProps)(TodoList);
