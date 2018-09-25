import React from 'react';

function Todo(props) {
  return (
    <div>
      {props.todos.map(todo => {
        return (
          <li
            key={todo.id}
            onClick={() => props.toggleCompleted(todo.id)}
            style={{ color: todo.completed ? 'red' : 'black' }}
          >
            {todo.value}
          </li>
        );
      })}
    </div>
  );
}

export default Todo;
