import React, { Component } from 'react';
import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';
import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        <h1>Todo</h1>
        <TodoList />
        <AddTodo />
      </div>
    );
  }
}

export default App;