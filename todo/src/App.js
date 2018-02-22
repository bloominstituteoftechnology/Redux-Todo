import React, { Component } from 'react';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';
import './App.css';

class App extends Component {
  state = {
    todos: [],
  };

  render() {
    return (
      <div>
        <AddTodo />
        <TodoList todos={this.state.todos}/>
      </div>
    );
  }
}

export default App;
