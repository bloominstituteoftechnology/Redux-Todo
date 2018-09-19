import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Todos from './components/Todos';

import { connect } from 'react-redux';
import { addTodo } from './actions';
import TodoForm from './components/TodoForm';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todoValue: ''
    };
  }

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  addTodo = (event) => {
    event.preventDefault();
    const { todoValue } = this.state;
    const newTodo = {
      id: this.props.todos.length + 1,
      completed: false,
      value: todoValue
    };
    this.props.addTodo(newTodo);
    this.setState({ todoValue: '' });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Redux Todo List</h1>
        </header>
        <TodoForm
          handleInputChange={this.handleInputChange}
          todoValue={this.state.todoValue}
          addTodo={this.addTodo}
        />
        <div>
          <Todos todos={this.props.todos} />
        </div>

      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    todos: state.todos
  };
};

export default connect(
  mapStateToProps,
  { addTodo }
)(App);
