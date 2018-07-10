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
      <input type="text" onChange={props.changeTodo} />
      <button
        onClick={() => {
          props.addTodo(props.text);
        }}
      >
        Submit
      </button>
      <button>Clear Completed</button>
    </form>
  );
};

const mapStateToProps = state => {
  return {
    text: state.text
  };
};
export default connect(
  mapStateToProps,
  { addTodo, changeTodo }
)(TodoForm);
