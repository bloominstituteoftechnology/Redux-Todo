import React from 'react';

import Todo from './Todo.js';

const TodoList = (props) => {
  return (
    <ul>
      {this.props.todos.map(todo, index => {
        return <Todo key={index} todo={todo} />
      })}
    </ul>
  );
}

export default TodoList;
