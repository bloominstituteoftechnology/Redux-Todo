import React, { Component } from 'react';
import './App.css';
import TodoForm from './Taskbar.js';
import Todos from './Tasklist.js'; 

class App extends React.Component{
  render() {
    return (
      <div className="App">
      <h1>Todo List Redux</h1>
        <Todos />
        <TodoForm /> 
      </div>
    );
  }
}

export default App;
