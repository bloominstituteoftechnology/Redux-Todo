import React from "react";

export default function TodoInput(props) {
  return (
    <span>
    <input
      onChange={props.onInputChange}
      type="text"
      value={props.inputText}
      placeholder="Add todo"
    />
    <button onClick={props.addTodo}>Add todo</button>
    </span>
  );
}
