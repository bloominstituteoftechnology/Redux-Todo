import React, { Component } from 'react';
import './App.css';

import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';

class App extends Component {
  render() {
    return (
      <div className="App">
        <AddTodo />
        <TodoList />
      </div>
    );
  }
}

export default App;
