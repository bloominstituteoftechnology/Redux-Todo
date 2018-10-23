import React from "react";

const TodoList = props => {
  return (
    <ul>
      {props.todos.map(todo => (
        <li>{todo.value}</li>
      ))}
    </ul>
  );
};

export default TodoList;
