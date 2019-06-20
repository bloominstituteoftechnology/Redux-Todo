import React from 'react';

import Todo from './Todo';
import './TodoList.scss';

const TodoList = props => {
  return (
    <ul>
      {props.todos.map(todo => {
        if (todo.id !== -1) return <Todo todo={todo} key={todo.id} />;
      })}
    </ul>
  );
};

export default TodoList;
