import React, { Component } from "react";
import { add, complete } from "./actions";
import { connect } from "react-redux";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={this.props.add}>TEST ADD ME</button>
        {console.log('Todo Store: ' , this.props.todo)}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    todo: state
  };
};

export default connect(mapStateToProps, { add, complete })(App);
