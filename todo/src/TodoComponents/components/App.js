import React, { Component } from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import "./App.css";

const store = createStore();

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header" />
      </div>
    );
  }
}

export default App;
