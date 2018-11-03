import React from "react";
import uuid from "uuid";

import { TodoList } from "./components/TodoComponents/TodoList";
import { TodoForm } from "./components/TodoComponents/TodoForm";

class App extends React.Component {
  state = {
    input: "",
    todos: []
  };

  componentDidMount() {
    this.setState({
      todos: JSON.parse(localStorage.getItem("todos")) || []
    });
  }

  updateLocalStorage = () => {
    localStorage.setItem("todos", JSON.stringify(this.state.todos));
  };

  handleChange = event => {
    this.setState({ input: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    const todos = this.state.todos.concat({
      task: this.state.input,
      id: uuid(),
      date: new Date(),
      completed: false
    });
    this.setState({ input: "", todos });

    this.updateLocalStorage();
  };

  toggleComplete = id => {
    this.setState(
      prevState => ({
        todos: prevState.todos.map(each => {
          if (each.id === id) each.completed = !each.completed;
          return each;
        })
      }),
      this.updateLocalStorage
    );
  };

  removeComplete = event => {
    this.setState(
      prevState => ({
        todos: prevState.todos.filter(each => {
          return each.completed === false;
        })
      }),
      this.updateLocalStorage
    );
  };

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList
          todos={this.state.todos}
          toggleComplete={this.toggleComplete}
        />
        <TodoForm
          input={this.state.input}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
        <button onClick={this.removeComplete}>Remove Completed</button>
      </div>
    );
  }
}

export default App;
