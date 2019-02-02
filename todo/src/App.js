import React, { Component } from 'react';

import TodoList from './TodoList';
import TodoForm from './TodoForm';
import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        <h1>My Todo List</h1>
        <TodoList  />
        <TodoForm />
      </div>
    );
  } 
}

export default App;