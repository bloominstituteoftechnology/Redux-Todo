import React, { Component } from 'react';
import './App.css';
import Todo from './Container/Todo';
import TodoList from './Container/TodoList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Todo />
        <TodoList />
      </div>
    );
  }
}

export default App;
