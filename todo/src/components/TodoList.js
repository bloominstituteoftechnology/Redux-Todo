import React from "react";
import Todo from "./Todo";

const TodoList = props => (
  <section className="list">
    <ul>
      {props.todo.map(item => (
        <Todo
          key={item.id}
          id={item.id}
          task={item.task}
          completed={item.completed}
          completeTodo={props.completeTodo}
          deleteTodo={props.deleteTodo}
        />
      ))}
    </ul>
  </section>
);

export default TodoList;