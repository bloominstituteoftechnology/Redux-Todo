import React, { Component } from 'react';
import { connect } from 'react-redux';
import Todos from './components/Todos';

class App extends Component {

  constructor() {
    super();

    this.state = {
      todos: []
    }
  }
  render() {
    return (
      <div className="App">
        {(this.state.todos.length === 0) ? 
          <div>No todos - add some </div>
        :
          <div>
            <h1>REDUX - To Do List</h1>
            <Todos />
          </div>
        }
      </div>
    );
  }
}

const mstp = state => {
  return {
    header: state.header,
    todos: state.todos
  }
}
export default connect(mstp)(App);
