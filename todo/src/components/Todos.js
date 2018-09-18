import React from "react";

const Todos = props => {
  return (
    <div className="todo-list">
      {props.todos.map(todo => (
        <div onClick={e => props.toggleCompleted(todo.id)} className="todo">
          {todo.value}
        </div>
      ))}
    </div>
  );
};

export default Todos;
