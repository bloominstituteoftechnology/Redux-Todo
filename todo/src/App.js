import React, { Component } from 'react';
import './App.css';
import Form from './Components/Form';
import TodoList from './Components/TodoList';

class App extends Component {
  render() {
    return (
      <div className="App">
       <h1>Todo List:</h1>
       <Form />
       <TodoList />
      </div>
    );
  }
}

export default App;
