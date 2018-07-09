import React, { Component } from "react";
import { connect } from "react-redux";
import "./App.css";

const App = props => {
  return (
    <div className="App">
      <h1> Todo List</h1>
      <input type="text" value="" />
      <button>Add Todo</button>
      {props.todoList.map(todo => <div key={todo}>{todo}</div>)}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    todoList: state.todoList
  };
};

export default connect(mapStateToProps)(App);
