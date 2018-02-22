import React, { Component } from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import Header from './components/Header';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Header />
          <TodoForm />
          <TodoList />
      </div>
    );
  }
}

export default App;

