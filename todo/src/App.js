import React, { Component } from "react";

import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      heading: "Todo List:",
      todos: [
        {
          value: "finish this lambda project",
          completed: false
        }
      ],
      todo: ""
    };
  }

  changeTaskHandler = event => {
    this.setState({ todo: event.target.value });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h2>Remove This Title</h2>
        </header>
      </div>
    );
  }
}

export default App;
