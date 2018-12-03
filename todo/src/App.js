import React, { Component } from "react";
import { connect } from "react-redux";

import "./css/index.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>This is a placeholder</h1>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { todos: state.todos };
};

export default connect(mapStateToProps)(App);
