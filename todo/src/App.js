import React, { Component } from 'react';
import { addTodoItem, markComplete } from './actions';
import { connect } from 'react-redux';
import './App.css';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Todo List</h1>
        <TodoList />
        <TodoForm
            Edit <code>src/App.js</code> and save to reload.
          </p>
          text={this.state.newTodo}
        />
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    todos: state.todos,
    id: state.id,
  };
};

export default connect(
  mapStateToProps,
  { addTodoItem, markComplete }
)(App);
