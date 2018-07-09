import React, { Component } from 'react';
import './App.css';
import ToDoList from './components/ToDoList.js';
import {addTodo, toggleTodo, deleteTodo} from './actions';
import {connect} from 'react-redux';


class App extends Component {
  constructor() {
    super();
    this.state = {
      title: 'Here is my ToDo App',
      char: '',

    }
  }

  handleNameChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmitTodo = () => {
    let nextId = Date.now();
    var todo = {
      task: this.state.char,
      id: nextId,
      completed: false
    };

    this.props.addTodo(todo);
    this.setState({char: ''});
  };


  render() {
    return (
      <div>
        <h1>{this.state.title}</h1>
        <input
          name='char' 
          onChange={this.handleNameChange}
          onKeyPress={
            (event) => {
              if(event.key === 'Enter'){
                this.handleSubmitTodo();
              }
            }
          }

          value={this.state.char}
          placeholder="new todo goes here"/>

          <ToDoList/>





      </div>
    );
  }
}


const mapStateToProps = (state) => {
  return {
    todos: state
  }
}

export default connect(mapStateToProps, {addTodo, toggleTodo, deleteTodo})(App);
