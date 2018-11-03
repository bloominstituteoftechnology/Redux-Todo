import React from 'react';
import TodoForm from '../TodoForm';

export default (props) => {
  return (
    <div className='container'>
      <ul>
        {
          props.todos.map(todo => <li key={todo.value}>{todo.value}</li>)
        }
      </ul>
      <TodoForm/>
    </div>
  );
}
