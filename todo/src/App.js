import React, { Component } from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import {connect} from 'react-redux';
import {handleSubmit, handleClear, handleCompleted} from './actions';

import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      todo: ''
    };
  }

  handleChange = (e) => {
    this.setState({todo: e.target.value});
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.handleSubmit(this.state.todo);
    this.setState({todo: ''});
  };

  render() {
    return (
      <div className="App">
        <h1>Todo List</h1>
        <TodoList todos={this.props.todos} value={this.state.todo} />
        <TodoForm handleChange={this.handleChange} handleSubmit={this.handleSubmit} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log('State', state);
  return {
    todos: state
  };
};

export default connect(mapStateToProps, {handleSubmit, handleClear, handleCompleted})(App);
