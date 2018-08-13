import React from 'react';
import './App.css';
import TodoList from './components/TodoList';
import TodoInput from './components/TodoInput';

const App = props => {
  return (
    <div className="app">
      <TodoList />
      <TodoInput />
    </div>
  );
}

export default App;
