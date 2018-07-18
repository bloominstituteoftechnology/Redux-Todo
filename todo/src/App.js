import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTodo, changeText } from './action/index.js';

import todosReducers from './reducers';
import './App.css';

const App = (props) => {
  let input;
  return (
    <div>
      <h1>Todos</h1>
      {props.todos.map((todo) => <div key={todo.value}>{todo.value}</div>)}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          {
            props.addTodo();
          }
        }}
      >
        New todo:
        <input type="text" value={props.text} onChange={props.changeText} />
      </form>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    todos: state.todos,
    text: state.text
  };
};

export default connect(
  mapStateToProps,
  { addTodo, changeText }
)(App);
