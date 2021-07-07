import React from "react";
import "./Todo.css";

const TodoForm = props => (
  <form>
    <input
      className="input"
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
