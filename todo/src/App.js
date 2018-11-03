import React, { Component } from 'react';
import './App.css';
import AddTodo from './containers/AddTodo';
import Todo from './components/Todo';

class App extends Component {
  render() {
    return (
      <div className="App">

        <AddTodo />
        <h1 style={{ marginLeft: '40px'}}>Todo List</h1>
       <Todo />

      </div>
    );
  }
}

export default App;
