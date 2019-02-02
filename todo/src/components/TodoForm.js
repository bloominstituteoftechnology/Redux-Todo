import React from "react";
import { connect } from "react-redux";
import { inputHandler, addTodo } from "../actions/index";

const TodoForm = props => {

  const addHandler = e => {
    e.preventDefault();
    props.addTodo(props.inputText)
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
          // onClick={this.props.clearCompleted}
        >
          Clear Completed
        </button>
      </form>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    inputText: state.inputText
  };
};

export default connect(
  mapStateToProps,
  { inputHandler, addTodo }
)(TodoForm);
