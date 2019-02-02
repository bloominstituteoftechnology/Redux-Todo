import React, { Component } from 'react';
import { connect } from 'react-redux';
import Todos from './components/Todos';
import TodoForm from './components/TodoForm';

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
        {(this.state.todos.length === 0) ? 
          <div>No todos - add some </div>
        :
          <div>
            <h1>REDUX - To Do List</h1>
            <Todos />
            <TodoForm />
          </div>
        }
      </div>
    );
  }
}

const mstp = state => {
  return {
    todos: state.todos
  }
}
export default connect(mstp)(App);
