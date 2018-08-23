import React from "react";
// import logo from "./logo.svg";
import { connect } from "react-redux";
import TodoList from "./Components/TodoList";
import {submitNewTask} from './actions';

import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newTodo: ""
    };
    this.submitNewTask = this.submitNewTask.bind(this);
    this.newTodoChange = this.newTodoChange.bind(this);
  }

  submitNewTask = event => {
    event.preventDefault();
    this.props.addTodo({
      value: this.state.newTodo,
      compelet: false
    });
    this.setState({
      newTodo: ""
    });
  };

  newTodoChange = event => {
    this.setState({
      newTodo: event.target.value
    });
  };

  render() {
    return (
      <div className="App">
        <form onSubmit="newTodoAdder">
          <label>Enter New Todo Here</label>
          <input
            placeholder="New Todo"
            value={this.state.newTodoChange}
            onchange={this.newTodoChange}
          />
        </form>
        <TodoList todos={this.props.todos} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    todos: state.todos
  };
};

export default connect(
  mapStateToProps,
  { submitNewTask }
)(App);
