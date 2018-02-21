import React from 'react';
import Todo from './Todo';

export default (props) => {
  const todos = props.todos.map((todo, i) => 
    <Todo todo={todo} key={i} index={i} />);
  return (
    <ul>
      { todos }
    </ul>
  );
};
