import React, { Component } from 'react';
import './App.css';
import AddTodo from './containers/AddTodo';
import Todo from './components/Todo';

class App extends Component {
  render() {
    return (
      <div className="App">

        <AddTodo />
        Todo List
       <Todo />

      </div>
    );
  }
}

export default App;
