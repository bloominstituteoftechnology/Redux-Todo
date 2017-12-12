import React, { Component } from 'react';
import './App.css';
import TodoList from './containers/TodoList';
import AddTodo from './containers/AddTodo';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Ting's Redux Todo</h1>
        </header>
        <AddTodo />
        <TodoList />
      </div>
    );
  }
}

export default App;
