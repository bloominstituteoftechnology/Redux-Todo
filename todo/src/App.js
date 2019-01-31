import React, { Component } from 'react';
import { connect } from 'react-redux'

import TodoInput from './containers/TodoInput'
import TodoList from './containers/TodoList'


import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      todos: []
    }
  }

  addTodo = text => {
    let newTodo = {
      todo: text,
      complete: false
    }
    this.setState(prev => {
      return { todos: [...prev.todos, newTodo]}
    })
  }


  render() {
    return (
      <div className="App">
        <h1>{this.props.myTodo}</h1>
        <TodoInput addTodo={this.addTodo} />
        <TodoList />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { myTodo: state.title }
}

export default connect(mapStateToProps, {})(App);
