import React from "react";
import TodoItem from "./TodoItem";

console.log(todos);

const TodoList = todos => {
  <div>
    {todos.map(todo => {
      <TodoItem />;
    })}
  </div>;
};
