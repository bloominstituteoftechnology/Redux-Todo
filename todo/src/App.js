import React, { Component } from 'react';
import TodoForm from './containers/TodoForm';
import TodoList from './containers/TodoList';
import './App.css';

export default class App extends Component {
  render() {
    return (
      <div className="app">
        <TodoForm />
        <TodoList />
      </div>
    );
  }
}