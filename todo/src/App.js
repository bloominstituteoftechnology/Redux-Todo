import React, { Component } from 'react';
import './App.css';
import TodoListMain from './containers/todoListMain';

class App extends Component {
  
  render() {
    return (
      <div className="App">
        <h1>Friggin work</h1>
        <TodoListMain />
      </div>
    );
  }
}

export default App;
