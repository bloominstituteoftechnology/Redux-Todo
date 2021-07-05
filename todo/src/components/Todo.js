import React from 'react';

// const red = { color: 'red' };
// const black = { color: 'black' };

function Todo(props) {
  return (
    <div>
      {props.todos.map(todo => {
        return (
          <li
            className="hvr-grow"
            key={todo.id}
            onClick={() => props.toggleCompleted(todo.id)}
            style={todo.completed ? { color: 'red' } : { color: 'black' }}
          >
            {todo.value}
          </li>
        );
      })}
    </div>
  );
}

export default Todo;
