import React, { Component } from 'react';
import TodoListContainer from './todoContainer';

class Todo extends Component {
  render() {
    return (
      <div className="Todo">
        <header className="Todo-header">
          <h1>Todo List</h1>
        </header>
        <TodoListContainer />
      </div>
    );
  }
}
export default Todo;