import React from "react";
import { connect } from "react-redux";

import { handleInput, addTodo } from "../actions";

const TodoForm = props => {
  return (
    <form>
      <input
        type="text"
        name="todo"
        placeholder="todo..."
        onChange={props.handleInput}
        value={props.todo}
      />
      <button onClick={e => props.addTodo(e, props.todo)}>Add Todo</button>
    </form>
  );
};

const mapStateToProps = state => {
  return {
    todo: state.todo
  };
};

export default connect(
  mapStateToProps,
  { handleInput, addTodo }
)(TodoForm);