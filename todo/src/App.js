import React, { Component } from 'react';
import TodoList from './containers/TodoList';
import TodoForm from './containers/TodoForm';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <TodoList />
        <TodoForm />
      </div>
    );
  }
}

export default App;
