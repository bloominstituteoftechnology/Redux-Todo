import React, { Component } from 'react';
import './App.css';

import TodosForm from './components/Todos';
import Todos from './compnents/Todos';

class App extends Component {
  render() {
    return (
      <div className="App">
        <TodosForm />
        <Todos />
      </div>
    );
  }
}

export default App;
