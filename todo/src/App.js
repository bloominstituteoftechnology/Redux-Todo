import React, { Component } from 'react';
import './App.css';

import TodoForm from './components/TodoForm';
import Todos from './components/Todos';

class App extends Component {
  render() {
    return (
      <div className="App">
        <TodoForm />
        <Todos />
      </div>
    );
  }
}

export default App;