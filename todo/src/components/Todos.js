import React from "react";

const Todos = props => {
  return (
    <div className="todo-list">
      {props.todos.map(todo => (
        <div className="todo">{todo.value}</div>
      ))}
    </div>
  );
};

export default Todos;
