import React from "react";
import { connect } from "react-redux";
import { addTodo } from "../actions";
import Todo from "./Todo";

const TodoList = props => {
  return (
    <div>
      <h3>TodoList</h3>
      {props.todos.map(todo => <Todo key={Math.random()} todo={todo.task} />)}
    </div>
  );
};

const mapStatetoProps = state => {
  return {
    todos: state
  };
};

export default connect(
  mapStatetoProps,
  { addTodo }
)(TodoList);
