import React, { Component } from "react";

const Todos = props => {
  return (
    <div>
      {props.todos.map(todo => (
        <div>
          <li key={todo.id}>{todo.text}</li>
          <button onClick={props.deleteTodo}>Delete Todo</button>
        </div>
      ))}
    </div>
  );
};

export default Todos;
