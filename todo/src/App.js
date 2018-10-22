import React, { Component } from 'react';
import Form from './components/Form';
import TodoList from './components/TodoList';



import './App.css';

class App extends Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <div className="App">
        <header className="app-header">
          <h1>Hi this is your todo list</h1>
        </header>
        <TodoList />
        <Form />
      </div>
    );
  }
}

export default App;
