import React, { Component } from 'react';
import { connect } from 'react-redux'; 
import { addTodo } from '/.Actions' 

import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      todos: []
    }
  }

  addTodo = (e) => {
    event.preventDefault(); 
    this.props.addTodo({
      value: this.state.newTodo, 
      complete: false 
    }); 
    this.setState({
      newTodo: ''
    }); 
  }

  




  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
