import React from "react";
import TodoItem from "./TodoItem";

// console.log(todos);
// Will pull data from TodoListContainer

const TodoList = todos => {
  <div>
    {todos.map(todo => {
      <TodoItem />;
    })}
  </div>;
};

export default TodoList;
