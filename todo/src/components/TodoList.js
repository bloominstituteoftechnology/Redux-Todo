import React from "react";
import Todo from "./Todo";

const List = props => {
  localStorage.setItem("todoList", JSON.stringify(props.todo));
  return (
    <section className="list">
      <ul>
        {props.todo.map(item => (
          <Todo
            key={item.id}
            id={item.id}
            task={item.task}
            completed={item.completed}
            onClick={() => props.completeTodo(item.id)}
            deleteTodo={() => props.deleteTodo(item.id)}
          />
        ))}
      </ul>
    </section>
  );
};
export default List;
