import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTodo, deleteTodo, toggleTodo } from '../actions';

import './TodoList.css';

class TodoList extends Component {
  constructor() {
    super();
    this.state = {
      value: '',
    };
  }

  handleDeleteTodo = e => {
    this.props.deleteTodo(e.target.getAttribute('id'));
  };

  handleToggleTodo = e => {
    this.props.toggleTodo(e.target.getAttribute('id'));
  };

  handleInputChange = e => {
    this.setState({ value: e.target.value });
  };

  handleSubmitTodo = e => {
    e.preventDefault();
    this.props.addTodo(this.state.value);
    this.setState({ value: '' });
  };

  render() {
    return (
      <div>
        <h2>To-Do List</h2>
        <ul>
          {this.props.todos.map(todo => {
            return (
              <div>
                <li
                  key={todo.id}
                  id={todo.id}
                  onClick={this.handleToggleTodo}
                  className={todo.completed ? 'completed' : null}
                >
                  {todo.value}
                </li>
                <button id={todo.id} onClick={this.handleDeleteTodo}>Delete</button>
              </div>
            );
          })}
        </ul>
        <input
          type="text"
          name="value"
          value={this.state.value}
          placeholder="add new todo"
          onChange={this.handleInputChange}
        />
        <button onClick={this.handleSubmitTodo}>Add Todo</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
    return {
        todos: state
    }
}

export default connect(mapStateToProps, { addTodo, deleteTodo, toggleTodo })(TodoList);
