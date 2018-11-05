import React, { Component } from 'react';
import './App.css';
import Header from "./Components/Header"
import TodoList from "./Components/TodoList"
import TodoForm from './Components/TodoForm';

//app.js renders the todolist
class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <TodoList />
        <TodoForm />
      </div>
    );
  }
}

export default App;
