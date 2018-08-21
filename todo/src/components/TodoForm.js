import React, { Component } from "react";

const TodoForm = props => {
  return (
    <div>
      <input
        name="todoText"
        value={props.todoText}
        type="text"
        onChange={props.handleInputChange}
        placeholder="Add a Todo"
      />
      <button onClick={props.addTodo}>Add a Todo</button>
    </div>
  );
};

export default TodoForm;
