import React from "react";
import { connect } from "react-redux";
import Todo from "./Todo";
// import { toggleTodo } from "../actions";

const Todos = ({todos, toggleTodo }) => (
  <ul>
    {todos.map(todo => (
      <Todo key={todo.id} {...todo} onClick={() => toggleTodo(todo.id)} />
    ))}
  </ul>
);

const mapStateToProps = state => {
  return { todos: state.todos };
};

export default connect(mapStateToProps)(Todos);


