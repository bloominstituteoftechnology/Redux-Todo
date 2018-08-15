import React, { Component } from 'react';
import './App.css';
import TodoForm from './components/todoForm';
import TodoList from './components/todoList';

class App extends Component {
  render(props) {
    return (
      <div className="App">
        <h1>Get it Redone</h1>
        <TodoForm />
        <TodoList />
      </div>
    );
  }
}

export default App;
