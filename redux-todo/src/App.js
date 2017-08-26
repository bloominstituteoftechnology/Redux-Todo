import React, { Component } from 'react';
// import TodoList from './components/TodoList';
import MakeTodo from './components/makeTodo';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>My React- Redux To Do List App</h1>
        <MakeTodo />
        {/* <TodoList /> */}
      </div>
    );
  }
};

export default App;
