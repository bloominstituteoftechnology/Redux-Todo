import React, { Component } from 'react';
import './App.css';
import Container from './components/Container'
import AddTodo from './components/AddTodo'

class App extends Component {
  render() {
    return (
      <div className="App">
      <AddTodo />
        <Container />
      </div>
    );
  }
}

export default App;
