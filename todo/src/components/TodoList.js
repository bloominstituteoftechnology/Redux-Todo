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
          style={props.style}
          strikethrough={item.completed ? props.strikethrough : null}
        />
      ))}
    </ul>
  </section>
);

export default List;
