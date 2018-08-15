import React, { Component } from 'react';
import './App.css';
import TodoForm from './components/todoForm';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Get it Redone</h1>
        <TodoForm />
      </div>
    );
  }
}

export default App;
