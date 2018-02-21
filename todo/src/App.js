import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ToDoList from './containers/todo-list';
import ToDoForm from './containers/todo-form';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ToDoList />
        <ToDoForm />
      </div>
    );
  }
}

export default App;
