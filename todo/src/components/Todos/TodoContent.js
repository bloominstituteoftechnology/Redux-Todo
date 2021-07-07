import React, { Component } from 'react';

import TodoList from './TodoList.js'

class TodoContent extends React {
  constructor(props) {
    super(props);
    this.state = {
      todos: []
    }
  }

  render() {
    return <TodoList todos={this.state.todos} />
  }
}

export default TodoContent;
