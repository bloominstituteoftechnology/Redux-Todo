import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';

import { connect } from 'react-redux';
import { add_todo } from '../actions'

class Todo extends Component {
  // constructor() {
  //   super();
  // }
  state = {
    todo: ''
  }

  inputChange = event => {
    this.setState({todo: event.target.value})
  }

  render() {
    console.log(this.props);
    console.log(this.state.todo);
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Your Day's Tasks</h1>
        </header>
        <form onSubmit={() => this.props.add_todo(this.state.todo)}>
          <input
            type='text'
            value={this.state.todo}
            placeholder='new task...'
            onChange={this.inputChange}></input>
          <input type='submit' value='Add Task'></input>
        </form>
        <div className='todo-list'>
          <ul>
            todo list goes here
          {this.props.todos.map(item => <li>{item.value}</li>)}
          </ul>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    todos: state
  }
}

export default connect(mapStateToProps, {add_todo})(Todo);
