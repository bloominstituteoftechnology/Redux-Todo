import React from "react";
import Todo from "./Todo";

const List = props => (
  <section className="list">
    <ul>
      {props.toDo.map(item => (
        <Todo
          key={item.id}
          id={item.id}
          task={item.task}
          handleCompleted={props.handleCompleted}
          completed={item.completed}
        />
      ))}
    </ul>
  </section>
);

export default List;
