import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TodoList from './components/todoList';
import TodoInput from './components/todoInput';


class App extends Component {
  render() {
    return (
      <div className="App">
        <TodoInput />
        <TodoList />
      </div>
    );
  }
}

export default App;
