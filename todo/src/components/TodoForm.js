import React from "react";
import { connect } from "react-redux";
import { addTodo, changeTodo, removeCompleted } from "../actions";
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
      <button onClick = {() => {
        props.removeCompleted(props.todos);
      }}>Clear Completed</button>
    </form>
  );
};

const mapStateToProps = state => {
  return {
    text: state.text,
    todos: state.todos
  };
};
export default connect(
  mapStateToProps,
  { addTodo, changeTodo, removeCompleted }
)(TodoForm);
