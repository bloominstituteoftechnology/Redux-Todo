import React, { Component } from 'react';
import TodosForm from './components/TodosForm';
import Todos from './components/Todos';
export default class App extends Component {
  render() {
    return (
      <div className="todo-app">
        <Todos />
        <TodosForm />
      </div>
    );
  }
}
