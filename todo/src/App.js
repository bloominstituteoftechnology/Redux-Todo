import React, { Component } from "react";
import { connect } from "react-redux";
import {
  addTodo,
  toggleComplete,
  removeCompleted,
  deleteTodo
} from "./actions";
import Form from "./components/Form";
import TodoList from "./components/TodoList";

import "./css/index.css";

class App extends Component {
  toggleComplete = id => {
    this.props.toggleComplete(id);
  };

  handleDelete = (ev, id) => {
    ev.preventDefault();
    ev.stopPropagation();

    this.props.deleteTodo(id);
  };

  render() {
    return (
      <div className="App">
        <h1>Todo List:</h1>

        <Form
          addTodo={this.props.addTodo}
          removeCompleted={this.props.removeCompleted}
          todos={this.props.todos}
        />

        <TodoList
          todos={this.props.todos}
          toggleComplete={this.props.toggleComplete}
          handleDelete={this.handleDelete}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { todos: state.todos };
};

const mapDispatchToProps = dispatch => {
  return {
    addTodo: text => dispatch(addTodo(text)),
    toggleComplete: id => dispatch(toggleComplete(id)),
    removeCompleted: arr => dispatch(removeCompleted(arr)),
    deleteTodo: id => dispatch(deleteTodo(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
