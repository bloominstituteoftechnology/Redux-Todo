import React from "react";

const TodoList = props => {
  console.log(props, "props for todolist");
  return (
    <div>
      {props.todos.map(todo => {
        <li key={Math.random()}> {todo} </li>;
      })}
    </div>
  );
};

export default TodoList;
