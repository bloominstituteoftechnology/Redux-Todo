import React from "react";
import { connect } from "react-redux";

import Todo from "./Todo";

const TodoList = props => (
  <ul>
    {props.todoList.map(todo => (
      <Todo
        id={todo.newTodo.id}
        key={todo.newTodo.todo}
        todo={todo.newTodo.todo}
      />
    ))}
  </ul>
);

const mapStateToProps = state => {
  return {
    todoList: state.todoList
  };
};

export default connect(
  mapStateToProps,
  {}
)(TodoList);
