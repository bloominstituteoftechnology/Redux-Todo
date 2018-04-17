import React, { Component } from 'react';
import { connect } from 'react-redux';
import logo from './logo.svg';
import './App.css';
import { submitToDo } from './reducers';
import { SUBMIT_TODO } from './actions';

class App extends Component {
  render() {
    let name = {
      value: 'Default',
      completed: false
    }
    return (
      <div className="ToDoList">
      <input type="text" placeholder='Add your To Dos here!'></input>
      <button>Submit</button>
      </div>
      // <div>
      //   Add Task list here
      // </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state);
  return {
    todos: state.todos,
  };
};

const mapDispatchToProps = () => {
  return {
    SUBMIT_TODO,
  };
};

export default connect(mapStateToProps, mapDispatchToProps())(App);
