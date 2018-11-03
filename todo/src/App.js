import React, { Component } from 'react';
import ToDoList from './components/TodoList';
import ToDoForm from './components/TodoForm';
import './App.css';

class App extends Component {
  render() {
    return (
      <>
        <ToDoForm />
        <ToDoList />
      </>
    );
  }
}

export default App;