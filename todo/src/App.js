import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { addTodo } from './actions';
import TodoList from './components/TodoList';

class App extends Component {
    state = {
      newTodo: ''
    };

    newTodo = (event) => {
      event.preventDefault();
      this.props.addTodo({
        value: this.state.newTodo,
        complete: false
      });
      this.setState({
        newTodo: ''
      });
    };

    updateNewToDo = (event) => {
      this.setState({
        newTodo: event.target.value
      });
    };

  render() {
    return (
      <div className="App">
        <form onSubmit={this.newTodo}>
          <input onChange={this.updateNewToDo} 
          placeholder="Add a todo" 
          value={this.state.newTodo} />
        </form>
        <TodoList todos={this.props.todos} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    todos: state.todos
  }
};

export default connect(mapStateToProps, { addTodo })(App);
