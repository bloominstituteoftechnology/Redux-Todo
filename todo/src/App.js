import React, { Component } from "react";
import { connect } from "react-redux";
import { addTodo, toggleComplete, removeCompleted } from "./actions";
import Form from "./components/Form";
import TodoList from "./components/TodoList";

import "./css/index.css";

class App extends Component {
  toggleComplete = id => {
    this.toggleComplete(id);
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
    removeCompleted: arr => dispatch(removeCompleted(arr))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
