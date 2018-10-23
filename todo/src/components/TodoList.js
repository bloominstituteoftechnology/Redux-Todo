import React from "react";
import Todo from "./Todo";

const List = props => (
  <section className="list">
    <ul>
      {props.todo.map(item => (
        <Todo
          key={item.id}
          id={item.id}
          task={item.task}
          completed={item.completed}
          onClick={() => props.completeTodo(item.id)}
        />
      ))}
    </ul>
  </section>
);

export default List;
