import React, { Component } from 'react';
import './App.css';
import TodoListMain from './containers/TodoListMain';

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
