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
  render() {
    return (
      <div className="App">
      <TodoList todos={this.props.todos} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    todos: state.todos
  }
}

export default connect(mapStateToProps)(App);
