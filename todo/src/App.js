
import React, { Component } from 'react';
import './App.css';
import TodoListContainer from './components/TodoListContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Keegans Todo List</h1>
        </header>
        <TodoListContainer />
      </div>
    );
  }
}
export default App;