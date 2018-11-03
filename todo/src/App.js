import React, { Component } from 'react';

import './App.css';
import TodoForm from './TodoForm';
import TodoList from './TodoList';


class App extends Component {
  render() {
    
    return (
      <div className="cta">
        <h1>Welcome to my list</h1>
        <TodoForm />
        <TodoList />

      </div>
    );
  }
}

export default App;
