import React, { Component } from 'react';
import './App.css';
import Todo from './containers/TodoListContainer';

class App extends Component {
  render() {
    return (
      <div>
      <Todo />
      </div>
    );
  }
}

export default App;
