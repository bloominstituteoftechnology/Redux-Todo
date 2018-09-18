import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Todos from "./components/Todos";
import { Provider } from "react-redux";
import { connect } from "react-redux";
import TodoForm from "./components/TodoForm";
import { handleChange, addTodo, toggleCompleted } from "./actions";

class App extends Component {
  handleEvent(e) {
    this.props.handleChange(e.target.value);
  }
  render() {
    return (
      <div className="App">
        <Todos
          toggleCompleted={this.props.toggleCompleted}
          todos={this.props.todos}
        />
        <TodoForm
          handleChange={this.handleEvent.bind(this)}
          addTodo={this.props.addTodo}
          inputText={this.props.inputText}
        />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    todos: state.todos,
    inputText: state.inputText
  };
}

export default connect(
  mapStateToProps,
  { handleChange, addTodo, toggleCompleted }
)(App);
