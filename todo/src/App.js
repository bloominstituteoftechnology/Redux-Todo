import React, { Component } from "react";
import { connect } from "react-redux";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div />
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
  {}
)(App);
