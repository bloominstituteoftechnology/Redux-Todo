import React, { Component } from 'react';

import TodoForm from './components/todoForm';
import TodoList from './components/todoList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <TodoForm />
        <TodoList />
      </div>
    );
  }
}

export default App;
