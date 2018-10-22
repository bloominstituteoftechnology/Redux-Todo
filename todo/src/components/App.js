import React, { Component } from "react";

import Footer from "./Tabs";
import AddTodo from "../containers/AddTodo";
import CurrentView from "../containers/CurrentView";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Tasks and Errands</h1>
        <AddTodo />
        <CurrentView />
        <Footer />
      </div>
    );
  }
}

export default App;
