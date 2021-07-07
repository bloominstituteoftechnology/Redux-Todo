import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';

import Todos from './components/Todos';
import TodoForm from './components/TodoForm';
import { addTodo, toggleComplete } from './action';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todoInput: '',
    };
  }

  handleInput = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  addTodo = (event) => {
    event.preventDefault();
    const newTodo = {
      id: Date.now(),
      completed: false,
      value: this.state.todoInput,
    };
    this.props.addTodo(newTodo);
    this.setState({ todoInput: '' });
  };

  render() {
    return (
      <div className="App">
        <Todos
          todos={this.props.todos}
          toggleComplete={this.props.toggleComplete}
        />
        <TodoForm
          handleInput={this.handleInput}
          addTodo={this.addTodo}
          todoInput={this.state.todoInput}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    todos: state.todos,
  };
};

export default connect(
  mapStateToProps,
  { addTodo, toggleComplete }
)(App);
