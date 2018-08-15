import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { addTodo } from './actions'
import TodoList from './components/todolist';

const App = props => {
    return (
      <div className="App">
        <TodoList />
      </div>
    );
  }

export default (App);

