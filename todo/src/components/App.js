import React, { Component } from 'react';
import './App.css';
import AddTodo from './AddTodo';
import Todo from './Todo';

 class App extends Component {
  render() {
    return (
      <div className="App">
         <AddTodo />
        <h4>Todo List</h4>
       <Todo />
       </div>
    );
  }
}
 export default App;

