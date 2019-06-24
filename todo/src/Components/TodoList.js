import React from 'react';
import Todo from './Todo';

const TodoList = props => {
  return (
    <div>
      {this.props.todos.map((todo, index) => (
        <Todo />
      ))}
      ;
    </div>
  );
};

export default TodoList;
