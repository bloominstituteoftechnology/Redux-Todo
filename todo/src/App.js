import React, { Component } from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <TodoList />
        <TodoForm />
      </div>
    );
  }
}

export default App;
