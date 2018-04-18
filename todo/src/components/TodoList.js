import React from "react";
import TodoItem from "./TodoItem";

// Will pull data from TodoListContainer
// todos, toggleTodoOnClick from TodoListContainer

const TodoList = ({ todos, toggleTodoOnClick }) => (
  <ul>
    {todos.map(todo => (
      <TodoItem
        key={todo.id}
        {...todo}
        onClick={() => toggleTodoOnClick(todo.id)}
      />
    ))}
  </ul>
);

export default TodoList;
