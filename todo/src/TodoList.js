import React, { Component } from "react";
import { connect } from "react-redux";
import { addTodo } from "./actions";

import "./css/index.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Todo List:</h1>
        <form className="form">
          <input required type="text" name="todo" />
          <button className="btn">Add New Todo</button>
        </form>

        <div className="list-container">
          {this.props.todos.map(todo => (
            <div className="todo-task">
              <h3>{this.todo}</h3>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { todos: state.todos };
};

export default connect(
  mapStateToProps,
  { addTodo }
)(App);
