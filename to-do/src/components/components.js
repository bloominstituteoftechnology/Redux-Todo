import React from "react";

export const ToDo = props => {
  const { todo } = props;
  if (todo.isDone) {
    return <strike>{todo.text}</strike>;
  } else {
    return <span>{todo.text}</span>;
  }
};

export const TodoList = props => {
  const { todos } = props;
  return (
    <div className="todo">
      <input type="text" placeholder="Add todo" />
      <ul className="todo-list">
        {todos.map(t => (
          <li key={t.id} className="todo-item">
            <Todo todo={t} />
          </li>
        ))}
      </ul>
    </div>
  );
};
