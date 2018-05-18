import React, { Component } from 'react';
import './App.css';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';


class App extends Component {
  render() {
    return (
      <div className ="App">
        <header className="App-header">          
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className="App-intro" >          
          <TodoForm />
          <TodoList />          
        </div>
      </div>
    );
  }
}

export default App;
