import React, { Component } from 'react';
import TodoListContainer from './components/TodoListContainer';
class App extends Component {
  render() {
    return (
      <div>
        <h1>Todo List</h1>
        <TodoListContainer />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    todos: state
  };
}

export default App;
