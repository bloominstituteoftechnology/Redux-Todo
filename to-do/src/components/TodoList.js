import React from "react";
import Todo from "./Todo";

import { connect } from "react-redux";

const TodoList = props => {
  return (
    <div className="list">
      {props.todos.map(todo => (
        <Todo todo={todo} key={todo.id} />
      ))}
    </div>
  );
};

export default TodoList;
