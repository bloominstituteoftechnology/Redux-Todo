import React from 'react';
import logo from './logo.svg';
import './App.css';
import TodoList from './components/TodoList';

const App = () => (
  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h1 className="App-title">
        Redux Todo List
      </h1>
    </header>
    <TodoList />
  </div>
);
export default App;
