import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import TodosList from './containers/TodosList';
import TodoDetail from './containers/TodoDetail';



class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Redux Todo App
          </p>
        </header>
        <h1><TodoDetail /></h1>
        <TodosList />
        
      </div>
    );
  }
}

export default App;
