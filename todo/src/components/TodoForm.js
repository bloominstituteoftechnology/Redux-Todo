import React from "react";
import { connect } from "react-redux";
import { inputHandler, addTodo, clearInput, clearCompleted } from "../actions/index";

const TodoForm = props => {

  const addHandler = e => {
    e.preventDefault();
    props.addTodo(props.inputText);
    props.clearInput();
  }

  const handleCompleted = event => {
      let todoArr = props.todos.filter( todo => {
        return todo.completed !== true
      })
      props.clearCompleted(todoArr);
  }

  return (
    <div>
      <form onSubmit={addHandler}>
        <input
          type="text"
          value={props.inputText}
          placeholder="...todo"
          onChange={props.inputHandler}
        />
        <button type="submit">Add Todo</button>
        <button
          type="button"
          onClick={handleCompleted}
        >
          Clear Completed
        </button>
      </form>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    todos: state.todos,
    inputText: state.inputText
  };
};

export default connect(
  mapStateToProps,
  { inputHandler, addTodo, clearInput, clearCompleted }
)(TodoForm);
