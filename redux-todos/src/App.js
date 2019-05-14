import React from 'react';

import './App.css';

import TodoList from './components/TodoList'

function App(props) {
  return (
    <div className="App">
      <h2>Yet Another "Todo List" App</h2>
      <TodoList />
    </div>
  );
}

export default App;
