import React, { Component } from 'react';
import logo from './logo.svg'; 
import AddTodo from './components';
import CompleteToggle from './components'; 
import './App.css';

class App extends Component {
  render() {
    return (
      <div className ="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className="App-intro" />  
        <AddTodo />
        <CompleteToggle />
        <ul className="App-intro">
          {this.props.todos.map(Todo => <li key={Todo}>{Todo}</li>)}
        </ul>         
      </div>
    );
  }
}

export default App;
