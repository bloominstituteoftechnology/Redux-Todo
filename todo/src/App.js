import React, { Component } from 'react';
import './App.css';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="form-and-list-container">
          <TodoForm />
          <TodoList />
        </div>
      </div>
    );
  }
}

export default App;
