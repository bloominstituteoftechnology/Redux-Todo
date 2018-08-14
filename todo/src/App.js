import React, { Component } from "react";
import { connect } from "react-redux";

import "./App.css";
import TodosList from "./components/todos/TodosList";
import { addToTodosList } from "./actions";

class App extends Component {
  constructor(props) {
    super(props);
    console.log("APP", props);
    this.state = {
      todos: props.todos
      // todos: props.todos
    };
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <TodosList todos={this.state.todos} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log("MapsStatetoProps state", state);
  return {
    todos: state
  };
};

export default connect(
  mapStateToProps,
  { addToTodosList }
)(App);
