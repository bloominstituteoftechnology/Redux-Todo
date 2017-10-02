import React, { Component } from 'react';
import './App.css';
import { Todo, TodoList } from './components';
// import { Todo } from './Todo';
// import { TodoList } from './TodoList';

class App extends Component {
  render() {
    return (
      <div>
        <Todo />
        <TodoList />
      </div>
    );
  }
}

export default App;
