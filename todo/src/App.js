import React, { Component } from 'react';
import './App.css';

import SubmitTodo from './SubmitTodo.js'
import TodoList from './TodoList.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <TodoList />
        <SubmitTodo />
      </div>
    );
  }
}

export default App;
