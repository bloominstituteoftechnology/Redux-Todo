import React, { Component } from 'react';
import ToDoList from './containers/todo-list';
import ToDoForm from './containers/todo-form';
import './App.css';

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
