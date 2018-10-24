import React, { Component } from 'react';
import AddTodo from './components/AddTodo.js'
import ToDoList from './containers/ToDoList.js'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <AddTodo/> 
      <ToDoList/>
      </div>
    );
  }
}



export default(App) 
