import React, { Component } from 'react';
import TodoListContainer from './TodoListContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>My Todo List</h1>
        </header>
        <TodoListContainer />
      </div>
    );
  }
}
export default App;