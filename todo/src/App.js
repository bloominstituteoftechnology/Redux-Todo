import React from 'react';

import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import './App.css';

const App = () => (
  <div className="App">
    <h1>Todo List</h1>
    <TodoForm />
    <TodoList />
  </div>
);

export default App;
