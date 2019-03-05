import React, { Component } from 'react';
import './App.css';

import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';
import TodoFilter from './components/TodoFilter';

class App extends Component {
  render() {
    return (
      <div className="App">
        <AddTodo />
        <TodoList />
        <TodoFilter />
      </div>
    );
  }
}

export default App;
