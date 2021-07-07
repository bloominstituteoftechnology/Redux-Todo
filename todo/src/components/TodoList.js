import React, { Component } from "react";
import { connect } from 'react-redux';
import { addTodo } from '../actions';

import Todo from './Todo';
import TodoForm from './TodoForm';

class TodoList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inputText: ''
    };
  };

  // Add text from input to state as it's being entered
  handleInput = (event) => {
    this.setState({ inputText: event.target.value });
  };

  // Add new entry to todo list
  handleSubmit = (event) => {
    event.preventDefault();
    // Need to setup the new object that'll be pushed to global state
    const newTodo = {
      id: this.props.todos.length + 1,
      value: this.state.inputText,
      completed: false
    };
    // Send the new object to the reducer:
    this.props.addTodo(newTodo);
    // Reset state inputText:
    this.setState({ inputText: '' });
  };

  render () {
    return (
      <div className='todoList'>
        <ul>
          {this.props.todos.map( (todo) => {
            return (
              <Todo 
                key={todo.id} 
                id={todo.id} 
                value={todo.value} 
                completed={todo.completed}  
              />
            );
          })}
        </ul>
        <TodoForm val={this.state.inputText} handleInput={this.handleInput} handleSubmit={this.handleSubmit} />
      </div>
    );
  }
};

// mapStateToProps so that we have the information needed from the Store
const mapStateToProps = (state) => {
  return {
    todos: state.todos
  };
};

export default connect(mapStateToProps, { addTodo })(TodoList);