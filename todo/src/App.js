import React, { Component } from 'react';

import './App.css';
import Todos from './components/Todos';
import TodosForm from './components/TodosForm';

export default class App extends Component {
  render() {
    return  <div className="App">
                <h1>Welcome to your Todo App</h1>
                <Todos />
                <TodosForm />        
            </div>
  }
}