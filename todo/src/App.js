import React, { Component } from 'react';
import TodoListContainer from './containers/TodoListContainer';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Andrews Todo List</h1>
        <TodoListContainer/>
      </div>
    );
  }
}

export default App;
