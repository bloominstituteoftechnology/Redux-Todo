import React from 'react';

const Todos = props => {
  return (
    <div>
      {props.todos.map(todo => (
        <p onClick={() => props.completeTodo(todo.id)}
           style={todo.completed ? {textDecoration: 'line-through'} : null}
           key={todo.id} >
           {todo.text}
        </p>
      ))}
    </div>
  );
};

export default Todos