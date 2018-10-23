import React from 'react';

import TodoForm from './TodoForm';
import Todo from './Todo';

import './Todos.css';

function Todos() {
  return (
    <div>
      <h1>Redux Todos</h1>
      <TodoForm />
      {/* Map over todos in store */}
      <Todo />
    </div>
  );
}

export default Todos;