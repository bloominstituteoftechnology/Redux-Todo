import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Todos from "./components/Todos";
import { Provider } from "react-redux";
import { connect } from "react-redux";

class App extends Component {
  render() {
    {
      console.log(this.props);
    }
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Todo Application:</h1>
        </header>
        <Todos todos={this.props.todos} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  console.log(state);
  return {
    todos: state.todos
  };
}

export default connect(mapStateToProps)(App);
