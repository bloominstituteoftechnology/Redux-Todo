import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ todos, onTodoClick }) => (
  <div>
  <ul>
    {todos.map(todo =>
      <TodoItem
        key={todo.id}
        {...todo}
        onClick={() => onTodoClick(todo.id)}
      />
    )}
  </ul>
  </div>
)

export default TodoList;
