import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import './App.css';
import TodoList from './components/TodoList';


function App() {
  return (
    <div className="App">
      
      <TodoList />
    </div>
  );
}

export default App;
