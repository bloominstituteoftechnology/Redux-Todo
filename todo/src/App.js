import React, { Component } from 'react';
import './App.css';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';

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
