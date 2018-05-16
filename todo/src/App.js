import React, { Component } from 'react';
import ToDoList from './components/TodoList';
import './css/App.css';

import {addTodo, toggleTodo, deleteTodo} from './actions';
import {connect} from 'react-redux';


class App extends Component {
  constructor() {
    super();
    this.state = {
      title: 'Welcome to My Todo App',
      char: '',
      // todos: this is in the Store Check mapStateToProps
    }
  }
  // lets build input that will allow us to type a new todo char
  // then a button, that will add that char into our chars array
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
          name="char" // should be known as the state.value of the thing we update
          onChange={this.handleNameChange}
          onKeyPress={
            (event) => {
              if(event.key === 'Enter'){
                this.handleSubmitTodo();
              }
            }
          }
          value={this.state.char} // should be bound to the state.value of thing we update
          placeholder="New todo here"
        />
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