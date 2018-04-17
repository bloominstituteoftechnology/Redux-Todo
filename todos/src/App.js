import React, { Component } from 'react';
import { connect } from 'react-redux';

import './App.css';
import { todoReducer } from './reducers';
import { submitTodo } from './actions';

class App extends Component {
  render() {
    let name = {
      value: 'Default',
      completed: false
    }
    console.log(this.props.store);
    return (
      <div className="ToDoList">
      <input type="text" placeholder='Add your To Dos here!'></input>
      <button >Submit</button>
      </div>

      // <div>
      //   Add Task list here
      // </div>

      // this.props.store.dispatch({ 
      //   type: 'SUBMIT_TODO', 
      //   payload: { 
      //     value: 'something', 
      //     completed: false } 
      //   })
    );
  }
}

const mapStateToProps = state => {
  console.log(state);
  return {
    todos: state,
  };
};

const mapDispatchToProps = () => {
  return {
    submitTodo,
  };
};

export default connect(mapStateToProps, mapDispatchToProps())(App);
