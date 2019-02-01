import React, { Component } from "react";
import { connect } from "react-redux";
import logo from "./logo.svg";
import ListContainer from "./Components/ListContainer";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <ListContainer list={this.props.todos} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    todos: state.todos
  };
};

export default connect(mapStateToProps)(App);
