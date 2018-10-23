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
  const { todos, toggleTodo, addTodo } = props;

  const toggleClick = id => event => toggleTodo(id);

  const changeHandler = event => {
    todos.event.target.value;
  };

  return (
    <div className="todo">
      <input type="text" placeholder="Add todo" />
      <ul className="todo-list">
        {todos.map(t => (
          <li key={t.id} className="todo-item" onClick={toggleClick(t.get(id))}>
            <Todo todo={t} />
          </li>
        ))}
      </ul>
    </div>
  );
};
