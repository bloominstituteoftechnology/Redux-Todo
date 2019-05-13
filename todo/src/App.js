import React from 'react';
import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';

import './App.css';

function App() {
  return (
    <div className="App">
      <AddTodo />
      <TodoList />
    </div>
  );
}

export default App;
