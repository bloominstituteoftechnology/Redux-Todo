import React, { Component } from 'react';

import './App.css';
import TodoContent from './components/Todos/TodoContent.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Todos</h1>
        </header>
        <div>
          {/* TODO: add form to create new todos */}
          <TodoContent />
        </div>
      </div>
    );
  }
}

export default App;
