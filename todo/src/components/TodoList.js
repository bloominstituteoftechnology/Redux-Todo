import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import { increment, decrement } from '../actions';
import Todos from './Todos';
import TodoForm from './TodoForm';
export default class TodoList extends Component {
  render() {
    return (
      <div className="todo-list">
        <p>Test</p>
        {/* {this.props.todos.map(todo => (
          <Todos todo={todo} key={Date.now()} />
        ))} */}
        <TodoForm />
      </div>
    );
  }
}
