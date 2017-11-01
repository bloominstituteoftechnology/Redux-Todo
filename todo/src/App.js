import React, { Component } from 'react';
import './App.css';

import TodosForm from './components/TodosForms';
import Todos from './components/Todos';

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
