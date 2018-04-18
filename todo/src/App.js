import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTodo } from './actions/App';
import logo from './logo.svg';
import './App.css';

import TodoList from './components/TodoList';

class App extends Component {
  constructor() {
    super();
    this.state = {
      todo: [],
      input: ''
    }
  }

  handleInput = (e) => {
    this.setState({input: e.target.value})
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Todo List</h1>
        </header>
        <div>
          <input placeholder='Add a task' onChange={this.handleInput}></input>
          <button onClick={() => this.props.addTodo(this.state.input)}>Add</button>
        </div>
        <TodoList task={this.props.task}/>
      </div>
    );
  }
}

const mapStatetoProps = (state) => {
  return {
    task: state
  };
}

export default connect(mapStatetoProps, { addTodo })(App);
