import React, { Component } from "react";

import { connect } from "react-redux";

import "./App.css";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";

class App extends Component {
  render() {
    return (
      <>
        <h1 className="title">Redux Todo List</h1>
        {this.props.errsucc}
        <TodoForm />
        <TodoList />
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    errsucc: state.errsucc
  };
};

export default connect(
  mapStateToProps,
  {}
)(App);
