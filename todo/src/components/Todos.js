import React from "react";
import "./Todo.css";

const Todos = props => {
  return (
    <div className="todo-container">
      {props.todos.map(todo => (
        <div
          onClick={e => {
            props.toggleCompleted(todo.id);
          }}
          className={`todo-item ${todo.completed ? `completed` : ` `}`}
        >
          {todo.value}
        </div>
      ))}
    </div>
  );
};

export default Todos;
