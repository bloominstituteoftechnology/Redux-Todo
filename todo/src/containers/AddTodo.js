import React from "react";
import { connect } from "react-redux";
import { addTodo } from "../actions";

// Form to add new todo items
const AddTodo = ({ dispatch }) => {
  // input variable to hold ref for input element
  let input;

  return (
    <div>
      <form
        onSubmit={event => {
          // dispatch function accepts an action (addTodo) and dispatches to store
          // Uses input variable
          dispatch(addTodo(input.value));
          input.value = "";
        }}
      >
        <input
          placeholder="Things to do..."
          ref={value => {
            // Assign value ref to input variable
            input = value;
          }}
        />
        <button type="submit">Add todo item</button>
      </form>
    </div>
  );
};

// Connect to redux store
export default connect()(AddTodo);
