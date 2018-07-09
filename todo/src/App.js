import React, { Component } from 'react';
import { connect } from 'react-redux';
import { add, remove } from './actions';
import './App.css';
import { Button, ButtonGroup } from 'reactstrap';
import TodoList from './Components/TodoList';

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
    this.setState({ [e.target.name]: e.target.value })
  }

  render() {
    if(!this.state.todos) return (
      <div>
          Please wait...
      </div>
    )

    return (
      <div className="App">
        <form className="todoForm" onSubmit={this.addTask}>
          <input 
            className="input"
            onChange={this.handleInputChange}
            placeholder="Add Task"
            value={this.state.value}
            name="value"
          />
          <ButtonGroup size="sm">
            <Button>Add To List</Button>
          </ButtonGroup>
        </form>
        <p> List of Todo's </p>
        <div className="todoList" >
          <div>
            <TodoList todos={this.props.todos} remove={this.props.remove} />
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