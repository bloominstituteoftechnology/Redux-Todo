import React from 'react';
import TodoItem from './TodoItem';

export default (props) => {
  const todos = props.todos.map((todo, i) => <TodoItem todo={todo} key={i} index={i} />);
  
  return (
    <ul>
        <li>
            {this.props.todo.value}
        </li>
    </ul>
  );
};