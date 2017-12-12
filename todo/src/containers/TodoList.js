import React from "react";
import { connect } from "react-redux";
import { addTodo, toggleTodo, removeTodo } from "../actions";
import { bindActionCreators } from "redux";
import Todo from "./Todo";

const TodoList = props => (
  <div>
    {props.todos.map(todo => (
      <Todo key={todo.id} {...todo} onClick={() => props.toggleTodo(todo.id)} remove={() => props.removeTodo(todo.id)} />
    ))}
  </div>
);

const mapStateToProps = state => {
  return {
    todos: state.todos
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ addTodo, toggleTodo, removeTodo }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
