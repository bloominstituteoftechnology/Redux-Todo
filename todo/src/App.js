import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TodoList from './component/TodoList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <TodoList />
        <TodoInput />
      </div>
    );
  }
}

export default App;
