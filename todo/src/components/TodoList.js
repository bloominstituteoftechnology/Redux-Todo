import React from "react";
import Todo from "./Todo";

export default function TodoList(props) {
  return (
    <ul>
      {props.todos.map((todo, index) => (
        <Todo
          key={`${todo.value}${index}`}
          toggleCompleted={props.toggleCompleted}
          index={index}
          todo={todo}
        />
      ))}
    </ul>
  );
}
