import React, { Component } from "react";
import logo from "./logo.svg";
import ListContainer from "./Components/ListContainer";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      todos: [
        {
          todo: "Take out the trash",
          complete: false
        },
        {
          todo: "Walk the dog",
          complete: false
        }
      ]
    };
  }

  render() {
    return (
      <div className="App">
        <ListContainer list={this.state.todos} />
      </div>
    );
  }
}

export default App;
