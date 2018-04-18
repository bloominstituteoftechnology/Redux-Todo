import React from "react";
import TodoItem from "./TodoItem";

// console.log(todos);
// Will pull data from TodoListContainer
// toggleTodoOnClick from TodoListContainer

const TodoList = ({ todos, toggleTodoOnClick }) => {
  <div>
    <ul>
      {todos.map(todo => {
        <TodoItem />;
      })}
    </ul>
  </div>;
};

export default TodoList;
