import React, { Component } from 'react';
import './App.css';
import Form from './Components/Form';
import TodoList from './Components/TodoList';
import { connect } from 'react-redux';

class App extends Component {
  render() {
    return (
      <div className="App">
       <h1>Todo List:</h1>
       <Form />
       <TodoList />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    todos: state.todos,
  }
}

export default connect(mapStateToProps, {  })(App);