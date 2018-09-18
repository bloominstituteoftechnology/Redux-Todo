import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';

import Todos from './components/Todos';
import TodoForm from './components/TodoForm';
import { addTodo } from './action';

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

  // handleSubmit = (event) => {
  //   event.preventDefault();
  //   console.log(event.target.name);
  //   this.props.addTodo(this.state.todoInput);
  // };

  addTodo = (event) => {
    event.preventDefault();
    const newTodo = {
      id: this.props.todos.length,
      completed: false,
      value: this.state.todoInput,
    };
    this.props.addTodo(newTodo);
    this.setState({ todoInput: '' });
  };

  render() {
    return (
      console.log(this.state.todoInput),
      (
        <div className="App">
          <Todos todos={this.props.todos} />
          <TodoForm
            handleInput={this.handleInput}
            addTodo={this.addTodo}
            todoInput={this.state.todoInput}
          />
        </div>
      )
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
  { addTodo }
)(App);
