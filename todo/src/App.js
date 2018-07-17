import React, { Component } from 'react';
import { connect } from "react-redux";
import './App.css';
import TodoList from './components/TodoList';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: []
    }
  }

  addTodo(){

  }
  render() {
    return (
      <div>
      <TodoList todos={this.props.todos} />
      </div>
    );
  }
}

export default connect(App);
