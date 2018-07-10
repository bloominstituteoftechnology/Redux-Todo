import React, { Component } from "react";
import TodoForm from "./components/form";
import TodoList from "./components/todolist";

import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      heading: "Todo List:",
      todos: [
        {
          value: "walk the dog",
          completed: false
        }
      ],
      todo: ""
    };
  }

  changeTaskHandler = event => {
    this.setState({ todo: event.target.value });
  };
  addTask = event => {
    event.preventDefault();
    const todos = this.state.todos.slice();
    todos.push({ value: this.state.todo, id: Math.random(), completed: false });
    this.setState({ todos, todo: "" });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Todo Redux</h1>
        </header>

        <TodoForm
          value={this.state.todo}
          eventHandler={this.changeTaskHandler}
          addTaskEvent={this.addTask}
        />

        <TodoList todos={this.state.todos} />
      </div>
    );
  }
}

export default App;
