import React, { Component } from 'react';

import TodoForm from './TodoForm';
import TodoList from './TodoList';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <TodoForm />
        <TodoList/>
      </div>
    );
  }
}

export default App;
