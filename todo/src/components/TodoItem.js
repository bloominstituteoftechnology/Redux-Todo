import React from 'react';

const TodoItem = (props) => {
  const { todo } = props;
  return (
    <li
      onClick={(e) => props.toggleComplete(e, todo.id)}
      style={{
        textDecoration: todo.completed ? 'line-through' : 'none',
        cursor: "pointer"
      }}
    >
      {todo.value}
    </li>);
}

export default TodoItem;
