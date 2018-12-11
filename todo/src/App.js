import React, { Component } from 'react';
import './App.css';
import AddTodo from './components/AddTodo';
import Todo from './components/Todo';

class App extends Component {
  render() {
    return (
      <div className="App">

        <AddTodo />
        <h1 style={{ marginLeft: '35px'}} >Todo List</h1>
       <Todo />

      </div>
    );
  }
}

export default App;
