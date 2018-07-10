import React from "react";
import { connect } from "react-redux";
import { addTodo, changeTodo } from "../actions";
const TodoForm = props => {
  return (
    <form
      onSubmit={e => {
        e.preventDefault();
      }}
    >
      <input type="text" onChange = { props.changeTodo } />
      <button
        onClick={e => {
          props.addTodo(e);
        }}
      >
        Submit
      </button>
      <button>Clear Completed</button>
    </form>
  );
};

const mapStateToProps = state => {
  console.log("State: ", state);
  return {
    todo: state.todo,
    text: state.text
  };
};
export default connect(mapStateToProps, { addTodo, changeTodo })(TodoForm);
