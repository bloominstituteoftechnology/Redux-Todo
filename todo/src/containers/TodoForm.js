import React, { Component } from 'react';

const TodoForm = props => {
  return (
    <div>
      <input
        name="todoText"
        value={props.todoText}
        type="text"
        onChange={props.handleInputChange}
        placeholder="Add Item"
      />
      <button onClick={props.addTodo}>Sumbit</button>
    </div>
  );
};

export default TodoForm;
