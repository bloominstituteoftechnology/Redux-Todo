import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTodo, toggleComplete } from '../actions';

import TodoItem from './TodoItem';
import TodoForm from './TodoForm';

class TodoList extends Component {
  constructor() {
    super();
    this.state = {
      newTodo: ''
    }
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  }

  addTodo = e => {
    e.preventDefault();
    const newTodo = {
      id: (this.props.todos.length - 1) + 1,
      value: this.state.newTodo,
      completed: false
    }

    this.props.addTodo(newTodo);
    this.setState({ newTodo: '' })
  }

  toggleComplete = (e, id) => {
    e.preventDefault();

    this.props.toggleComplete(id);
  }

  render() {
    const todoItem = this.props.todos.map(todo => (
      <TodoItem
        key={todo.id}
        todo={todo}
        toggleComplete={this.toggleComplete}
      />
    ));

    return (
      <div>
        <TodoForm
          handleChange={this.handleChange}
          addTodo={this.addTodo}
          newTodo={this.state.newTodo}
        />

        <ul>
          {todoItem}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state.todos)
  return {
    // todos: array of objects
    todos: state.todos
  }
}

export default connect(mapStateToProps, { addTodo, toggleComplete })(TodoList);
