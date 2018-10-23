import React from 'react';

const TodoItem = (props) => {
  const { todo } = props;
  return (
    <div>
      <li
        onClick={(e) => props.toggleComplete(e, todo.id)}
        style={{
          textDecoration: todo.completed ? 'line-through' : 'none',
          cursor: "pointer"
        }}
      >
        {todo.value}
      </li>
      <button type="submit" onClick={(e) => props.deleteTodo(e, todo.id)}>Delete</button>
    </div>
  );
}

export default TodoItem;
