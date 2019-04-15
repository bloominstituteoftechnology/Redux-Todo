import React, { Component } from "react";
import { connect } from "react-redux";

import {
  addTodo,
  deleteTodo,
  finishedTask,
  deleteCompleted
} from "./actions/index";
import TodoList from "./components/TodoList";

import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newTodo: ""
    };
  }

  // methods
  handleAddTodo = e => {
    e.preventDefault();
    this.props.addTodo({
      value: this.state.newTodo,
      complete: false
    });
    this.setState({
      newTodo: ""
    });
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  // render
  render() {
    console.log(this.props);
    return (
      <div>
        <TodoList />
        <form onSubmit={this.handleAddTodo}>
          <input
            type="text"
            name="todoText"
            value={this.state.todoText}
            onChange={this.handleChange}
          />
        </form>
        <button onClick={this.addTodo}>Add Todo</button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    todos: state.todos
  };
};

export default connect(
  mapStateToProps,
  { addTodo, deleteTodo, finishedTask, deleteCompleted }
)(App);
