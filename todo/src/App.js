import React, { Component } from 'react';
import './App.css';
import todoListMain from './containers/todoListMain'

class App extends Component {
  render() {
    return (
      <div className="App">
        <todoListMain />
      </div>
    );
  }
}

export default App;
