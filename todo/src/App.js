import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TodoContainer from './containers/TodoContainer.js'

class App extends Component {
  render() {
    return (
    <TodoContainer/>
    );
  }
}

export default App;
