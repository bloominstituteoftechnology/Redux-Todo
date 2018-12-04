import React from "react";
import TodoItem from "./TodoItem";

const TodoList = props => {
  return (
    <div className="list-container">
      <ul>
        {props.todos.map((todo, idx) => (
          <TodoItem
            toggleComplete={props.toggleComplete}
            todo={todo}
            key={idx}
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
