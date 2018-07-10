import React, { Component } from 'react';
import '../App.css';
import TodoListContainer from './TodoListContainer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Something is actually here</h1>
        <TodoListContainer />
      </div>
    );
  }
}

export default App;
