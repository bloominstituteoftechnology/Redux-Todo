import React, { Component } from "react";

const Todos = props => {
  return (
    <div>
      {props.todos.map(todo => (
        <li key={todo.id}>{todo.text}</li>
      ))}
    </div>
  );
};

export default Todos;
