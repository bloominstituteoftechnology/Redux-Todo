import React from "react";
import { toggleTodo } from "../actions";
import { connect } from "react-redux";

function Todo(props) {
  function handleToggle() {
    const todo = {
      index: props.index,
      value: props.todo.value,
      completed: (props.todo.completed = !props.todo.completed)
    };
    props.toggleTodo(todo);
  }

  return (
    <div>
      <p onClick={handleToggle}>
        {props.todo.value}, {props.todo.completed ? "true" : "false"}
      </p>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    todos: state.todos
  };
};

export default connect(
  mapStateToProps,
  { toggleTodo }
)(Todo);
