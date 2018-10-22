import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions';

import TodoItem from './TodoItem';

class TodoListContainer extends Component {
  constructor() {
    super();
    this.state = {
      newTodo: ''
    }
  }

  handleAddTodo = e => {
    this.setState({ [e.target.name]: e.target.value });
  }

  submitNewTodo = e => {
    e.preventDefault();
    this.props.addTodo(this.state.newTodo);
    this.setState({ newTodo: '' })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.submitNewTodo}>
          <input
            type="text"
            placeholder="Add new todo"
            onChange={this.handleAddTodo}
            name="newTodo"
            value={this.state.newTodo}
          />
          <button type="submit">Add Todo</button>
        </form>

        <ul>
          {this.props.todos.map((todo, i) => (
            <li key={i}>
              <TodoItem todo={todo} />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state)
  return {
    todos: state.todos
  }
}

export default connect(mapStateToProps, { addTodo })(TodoListContainer);
