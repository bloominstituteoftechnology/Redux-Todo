import React, { Component } from "react";
import "./App.css";
import { addTodo } from "./actions";
import { connect } from "react-redux";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newTask: ""
    };
  }

  inputHandler = event => {
    this.setState({
      newTask: event.target.value
    });
  };

  submit = event => {
    const newTask = {
      id: new Date(),
      task: this.state.newTask,
      completed: false
    };
    this.props.addTodo(newTask);
    this.setState({
      newTask: ""
    });
  };
  render() {
    return (
      <div className="App">
        <TodoList />
        <TodoForm
          submit={this.submit}
          value={this.state.newTask}
          inputHandler={this.inputHandler}
        />
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    todos: state.todos
  };
};
export default connect(
  mapStateToProps,
  { addTodo }
)(App);
