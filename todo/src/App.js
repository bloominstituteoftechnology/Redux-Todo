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

  handleChange = (event) => {
    this.setState({todo: event.target.value});
  };

  handleSubmit = (event) => {
    event.preventDefault();
    if(this.state.todo !== '') {
      this.props.handleSubmit(this.state.todo);
      this.setState({todo: ''});      
    }
  };

  handleCompleted = (event) => {
    this.props.handleCompleted(event);
  };

  handleClear = (event) => {
    this.props.handleClear(event);
  };

  render() {
    return (
      <div className="App">
        <div className="todo">
          <h1>Todo List:</h1>
          <TodoList todos={this.props.todos} handleCompleted={this.handleCompleted} handleClear={this.handleClear} />
          <TodoForm todos={this.props.todos} handleChange={this.handleChange} handleSubmit={this.handleSubmit} value={this.state.todo} />
        </div>
      </div>
    );
  }
}

// tells component what props will be added
const mapStateToProps = state => {
  console.log('state', state);
  return {
    todos: state
  };
};

export default connect(mapStateToProps, {handleSubmit, handleClear, handleCompleted})(App);
// new connected class