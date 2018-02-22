import React, { Component } from 'react';
import './App.css';

import TodoForm from './Components/TodoForm';
import Todos from './Components/Todos';

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