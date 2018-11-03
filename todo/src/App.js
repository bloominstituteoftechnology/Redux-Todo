import React, { Component } from 'react';


import './App.css';
import Form from './Components/Form';
import TodoList from './Components/TodoList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <TodoList />
        <Form />
   
      </div>
    );
  }
}

export default App;