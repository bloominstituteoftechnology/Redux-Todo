import React from 'react';

import Todo from './Todo';
import './TodoList.scss';

const TodoList = props => {
  return (
    <ul>
      {props.todos.map(todo => (
        <Todo todo={todo} key={todo.id} />
      ))}
    </ul>
  );
};

export default TodoList;
