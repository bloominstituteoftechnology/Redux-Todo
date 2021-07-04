import React, { Component } from 'react';
import Todos from './containers/Todos';
import TodoList from './containers/TodoList';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Todos />
        <TodoList />
      </div>
    );
  }
}

export default App;
