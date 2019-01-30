import React, { Component } from 'react';
import { connect } from 'react-redux'

import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      todos: []
    }
  }

  addTodo = test => {
    let newTodo = {
      todo: test,
      complete: false
    }
    this.setState(prev => {
      return { todos: [...prev.todos, newTodo]}
    })
  }


  render() {
    return (
      <div className="App">
        <h1>{this.props.myTitle}</h1>
      </div>
    );
  }
}

function mapStateToProp(state) {
  return { myTitle: state.title }
}

export default connect(mapStateToProp, {})(App);
