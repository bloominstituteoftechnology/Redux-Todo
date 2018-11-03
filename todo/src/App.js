import React, { Component } from 'react';
import connect from 'react-redux';
import TodoList from './Components/TodoList';
import './App.css';

class App extends Component {
  render() {
    return (
      <>
        <TodoList />
      </>
    );
  }
}

export default App;
