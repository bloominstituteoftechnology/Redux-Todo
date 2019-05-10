import React, { Component } from 'react';
import { connect } from 'react-redux';
import { add, remove, complete } from './actions'
import TodoList from './Components/TodoList'
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
      complete: false
    }
    this.props.add(task);
    this.setState({ value: '' });
  }

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  render() {

    if (!this.state.todos) return (
      <div>
        Please wait a moment ...
      </div>
    )
    return (
      <div className="App">
        <div className="smurfForm">
          <form onSubmit={this.addTask}>
            <input
              className="input"
              onChange={this.handleInputChange}
              placeholder="Add Task"
              value={this.state.value}
              name="value"
            />
            <button className="button button-add" type="submit">Add To List</button>
          </form>
        </div>
        <div className="smurfList" >
          <h2> List of ToDos </h2>
          <TodoList todos={this.props.todos} complete={this.props.complete} remove={this.props.remove} />
        </div>
        <div className="footnote" >
          Click on the task you wish to complete
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


export default connect(appProps, { add, remove, complete })(App);
