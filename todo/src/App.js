import React, { Component } from 'react';
import './App.css';

import Todos from './components/Todo/Todos';
import TodoForm from './components/Todo/TodoForm';

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
