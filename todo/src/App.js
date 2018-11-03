import React, { Component } from 'react';
import {connect} from 'react-redux';
import {addTodo} from './actions/index';
import TodoList from './components/TodoList';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newTodo: ''
    };
  }

  addTodo = (event)=> {
    event.preventDefault();
    this.props.addTodo({
      value: this.state.newTodo,
      complete: false
    });
    this.setState({newTodo: ''});
  };

  updateTodos = (event)=> {
    this.setState({newTodo: event.target.value});
  };

  render() {
    return (
      <div className="App">
        <form onSubmit={this.addTodo}>
          <input
            onChange={this.updateTodos}
            value={this.state.newTodo}
            placeholder='To Do'
          />
        </form>
        <TodoList
          todos={this.props.todos}
        />
      </div>
    );
  }
}

const mapStateToProps = (state)=> {
  return {
    todos: state.todos
  };
};

export default connect(mapStateToProps, {addTodo})(App);
