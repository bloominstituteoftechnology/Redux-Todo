import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import TodoForm from "./components/TodoForm";
import { connect } from "react-redux";
import { addTodoAction } from "./actions/addTodoAction";
import { toggleTodoAction } from "./actions/toggleTodoAction";
import TodoList from "./components/TodoList";
import Todo from "./components/Todo";

class App extends Component {
  render() {
    // console.log(this.props);
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        {/* render todo form here */}
        <TodoForm {...addTodoAction} />
        {/* render todo list here */}
        <TodoList todos={this.props.todos} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    todos: state.todos
  };
};

export default connect(mapStateToProps, { addTodoAction, toggleTodoAction })(
  App
);
