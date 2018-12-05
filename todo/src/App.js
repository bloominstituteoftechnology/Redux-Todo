import React, { Component } from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <h1>Todo List</h1>
        <TodoForm/>
        <TodoList/>
      </div>
    );
  }
}

export default App;
