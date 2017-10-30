import React, { Component } from 'react';
import './App.css';
import TodoApp from './containers/todolist';

class App extends Component {
  render() {
    return (
      <div className="app">
        <TodoApp/>
      </div>
    );
  }
}

export default App;
