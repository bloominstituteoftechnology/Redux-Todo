import React, { Component } from 'react';
import TodoList from './components/TodoList';
import TodoItem from './components/TodoItem';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <TodoItem />
        <TodoList />
      </div>
    );
  }
}

export default App;
