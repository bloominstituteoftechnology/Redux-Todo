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
    if(this.state.todo !== '') {
      this.props.handleSubmit(this.state.todo);
      this.setState({todo: ''});      
    }
  };

  handleCompleted = (e) => {
    this.props.handleCompleted(e);
  };

  handleClear = (e) => {
    this.props.handleClear(e);
  };

  render() {
    return (
      <div className="App">
        <div className="todo-container">
          <h1>Todo List</h1>
          <TodoList todos={this.props.todos} handleCompleted={this.handleCompleted} handleClear={this.handleClear} />
          <TodoForm todos={this.props.todos} handleChange={this.handleChange} handleSubmit={this.handleSubmit} value={this.state.todo} />
        </div>
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
