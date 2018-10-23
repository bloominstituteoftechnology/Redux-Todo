import React, { Component } from 'react';
import Todo from './Components/Todo'
import TodoList from './Components/TodoList'
import TodoForm from './Components/TodoForm'

class App extends Component {
  render() {
    return (
      <div className="App">
        <TodoList />
        <TodoForm />
      </div>
    );
  }
}

export default App;
