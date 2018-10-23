import React, { Component } from 'react';

import './App.css';
import TodoForm from "./components/TodoForm"
import TodoList from "./components/TodoList"



class App extends Component {
  render() {
    return (
      <div className="App">
      <h1>Todo List</h1>
      <div className="app-wrapper">
      <TodoList />
      <TodoForm />
      </div>
      </div>
    );
  }
}

export default App;
