import React, { Component } from 'react';
import './App.css';
import TodoForm from './components/TodoForm';
import Todo from './components/Todo';
import TodoList from './components/TodoList';

class App extends Component {
  constructor(props ){
    super(props);
    this.state = {
      todo: []
    }
  }
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
