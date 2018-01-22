import React, { Component } from 'react';
import '../styles/App.css';
import TodoListContainer from './TodoListContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Ryan's Todo List</h1>
          <TodoListContainer />
        </header>
      </div>
    );
  }
}

export default App;
