import React, { Component } from 'react';
import { connect } from 'react-redux';

import './App.css';
import { getTodos, submitTodo, toggleTodo } from './actions';

class App extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log(this);
    this.props.getTodos();
  }

  render() {
    let name = {
      value: 'Default',
      completed: false
    }

    return (
      <div className="ToDoList">
      <input type="text" placeholder='Add your To Dos here!' />
      <button>Submit</button>
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
    getTodos,
    submitTodo,
    toggleTodo
  };
};

export default connect(mapStateToProps, mapDispatchToProps())(App);
