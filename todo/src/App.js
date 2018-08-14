import React, { Component } from 'react';
import styled from 'styled-components';
import TodoList from './components/TodoList.js';
import AddTodo from './components/AddTodo.js';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      todos:[
        
      ],
    }
  }

  render() {
    return (
      <div className="App">
        <AddTodo />
        <TodoList todos={}/>
      </div>
    );
  }
}

export default App;
