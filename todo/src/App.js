import React, { Component } from 'react';
import Todos from './components/Todos';
import TodoForm from './components/TodoForm';

export default class App extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App">
        
            <h1>REDUX - To Do List</h1>
            <Todos />
            <TodoForm />
      </div>
    );
  }
}
