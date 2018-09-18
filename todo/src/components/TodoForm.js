import React from "react";

const TodoForm = props => (
  <form>
    <input
      onChange={e => props.handleChange(e)}
      type="text"
      placeholder="Add todo"
      value={props.inputText}
    />
    <button
      onClick={e => {
        e.preventDefault();
        props.addTodo(props.inputText);
      }}
    >
      Add!
    </button>
  </form>
);

export default TodoForm;
