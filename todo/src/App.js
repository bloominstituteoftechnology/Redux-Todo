import React, { Component } from 'react';
import { connect } from 'react-redux';
import { add, remove } from './actions'
import TodoList from './Components/TodoList'

import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      value: ''
    };
  }

  componentDidMount = () => {
    this.getTodos();
  }

  getTodos = () => {
    this.setState({ todos: this.props.todos });    
  }

  addTask = event => {
    event.preventDefault();
    const task = {
      value: this.state.value,
      completed: false
    }
    this.props.add(task);
    this.setState({ value: '' });
  }

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value})
  }

  render() {
    const { todos } = this.props;
    const mappedTodos = todos.map(todo => 
      <div>
        {todo.value}
        <button onClick={() => this.props.remove({value: todo.value})} className="button button-delete" > X </button>
      </div>)

    if(!this.state.todos) return (
      <div> 
        Please wait a moment ...
      </div>
    )
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ToDos</h1>
        </header>
        <p> Add To Do </p>
        <form className="smurfForm" onSubmit={this.addTask}>
          <input
            className="input"
            onChange={this.handleInputChange}
            placeholder="Add Task"
            value={this.state.value}
            name="value"
          />
          <button className="button button-add" type="submit">Add To List</button>
        </form>
        <p> List of ToDos </p>
        <div className="smurfList" >
          <div className="smurfs" >
            <ul>{mappedTodos}</ul>
          </div>
        </div>
      </div>
    );
  }
}
const appProps = state => {
  return {
    todos: state
  };
};


export default connect(appProps, { add, remove })(App);
