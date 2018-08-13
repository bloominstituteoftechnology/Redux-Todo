import React from 'react';
import Todo from './Todo';

const TodoList = ({ todos, toggleTodo, deleteTodo }) => {
  return (
    <ul>
      {todos.map((todo, ind) => (
        <Todo
          key={ind}
          {...todo}
          completeTodo={() => toggleTodo(todo.id)}
          deleteTodo={() => deleteTodo(todo.id)}
        />
      ))}
    </ul>
  );
};

export default TodoList;
