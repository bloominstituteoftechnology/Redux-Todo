import React, { Component } from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className='app-title'>
          <h1 className='title-text'>TODO LIST</h1>
          <i className="fas fa-caret-right"></i>
        </div>
        <div className='todo-container'>
          <TodoForm />
          <TodoList />
        </div>
      </div>
    );
  }
}

export default App;
