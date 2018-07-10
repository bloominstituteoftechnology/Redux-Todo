import React from "react";
import Todo from "./todo";

const TodoList = props => {
  console.log(props, "props for todolist");
  return (
    <div>
      {props.todos.map(todos => <Todo key={Math.random()} todos={todos} />)}
    </div>
  );
};

export default TodoList;
