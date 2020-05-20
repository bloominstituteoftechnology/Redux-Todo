import React, { Component } from 'react';
import "./App.css";
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
class App extends Component {


  render() {

    return (
      <div className='App'>
      <TodoForm/>
      <TodoList/>
     
      </div>
    );
  }
}

export default App;
