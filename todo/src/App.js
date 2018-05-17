import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AddTodo from './components/AddTodo';

class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
        </p>
	<AddTodo /> {/* putting our AddTodo component in here */}
      </div>
    );
  }
}

export default App;

//I'm not totally sure this needs to be a separate file but it was already in here so I just put my AddTodo component here in the return so that it would display.
