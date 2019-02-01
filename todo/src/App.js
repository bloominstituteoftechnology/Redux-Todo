import React, { Component } from "react";
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

export default App;
