import React, { Component } from "react";

import "./App.css";

class App extends Component {
  state = {
    todo: "",
    todos:[]
  };

  handleInput = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit=(event) => {
    event.preventDefault()
   const todos=[...this.state.todos]
    todos.push(this.state.todo)
    this.setState({
      todos
    })
  }
  render() {
    return (
      <div className="App">
        <form onSubmit={this.handleSubmit}>
          <input
            onChange={this.handleInput}
            name="todo"
            value={this.state.todo}
            placeholder="add task"
            type="text"
          />
          <button>submit</button>
        </form>
        {this.state.todos.map((todo,index) => {
          return (
            <div key={index}>
              {todo}
            </div>
          )
        })}

      </div>
    );
  }
}

export default App;
