import React from "react";
import { connect } from "react-redux";
import Todo from "./Todo";
import { toggleTodo } from "../actions";

const TodosList = ({ todos, toggleTodo, deleteTodo }) => {
  console.log(todos);
  return (
    <ul>
      {todos.map(todo => (
        <Todo key={todo.id} {...todo} onClick={() => toggleTodo(todo.id)} />
      ))}
    </ul>
  );
};

const mapStateToProps = state => {
  return {
    todos: state
  };
};

const mapDispatchToProps = dispatch => ({
  toggleTodo: id => dispatch(toggleTodo(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodosList);
