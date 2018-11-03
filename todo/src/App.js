import React, { Component } from 'react';

import './App.css';
import TodoList from './todos/TodoList';
import AddTodo from './form/AddTodo';

class App extends Component {
  render() {
    return (
      <div className="App">
        <TodoList />
        <AddTodo />
      </div>
    );
  }
}

export default App
