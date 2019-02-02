import React, { Component } from 'react';
import { connect } from 'react-redux';
import Todos from './components/Todos';

export default class App extends Component {

  constructor() {
    super();

    this.state = {
      header: 'Todo List',
      todos: []
    }
  }
  render() {
    return (
      <div className="App">
        {!(this.state.todos) ? 
          <div>No todos - add some </div>
        :
          <div>
            <h1>{this.state.header}</h1>
            <Todos todos={this.state.todos} />
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
