import React from 'react';

const Todos = props => {
  return (
    <div>
      {props.todos.map(todo => (
        <div className='todo' key={todo.id}>
            <p  className='text' 
                onClick={() => props.completeTodo(todo.id)} 
                style={todo.completed ? {textDecoration: 'line-through'} : null}>
                {todo.text} 
            </p>
            <div className='delete' onClick={() => props.deleteTodo(todo.id)}>✕</div>
        </div>
      ))}
    </div>
  );
};

export default Todos 