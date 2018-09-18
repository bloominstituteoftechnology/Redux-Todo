import React, { Component } from 'react';
import {connect} from 'react-redux';
import './App.css';

import Todos from './components/components/Todos';
import TodoForm from './components/components/TodoForm';
import {addTodo} from './components/actions';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todoInput: '',
    }
  }

  addTodo = (event) => {
    event.preventDefault();

    const newTodo = {
      id: this.props.todos.length,
      completed: false,
      text: this.state.todoInput
    }

    this.props.addTodo(newTodo);
    this.setState({todoInput: ""});
  };

  handleInput = (event) => {
    this.setState({[event.target.name]: event.target.value});
  };

  render() {
    console.log(this.props);
    return (
      <div className="App">
        <Todos todos={this.props.todos} />
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
    todos: state.todos
  }
}

export default connect(mapStateToProps, {addTodo})(App);