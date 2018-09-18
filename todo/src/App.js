import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Todos from "./components/Todos";
import { Provider } from "react-redux";
import { connect } from "react-redux";
import TodoForm from "./components/TodoForm";
import { handleChange, addTodo } from "./actions";

class App extends Component {
  handleEvent(e) {
    console.log(e.target.value);
    this.props.handleChange(e.target.value);
    console.log(this.props);
  }
  render() {
    {
      console.log(this.props);
    }
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Todo Application:</h1>
        </header>
        <Todos todos={this.props.todos} />
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
  console.log(state);
  return {
    todos: state.todos,
    inputText: state.inputText
  };
}

export default connect(
  mapStateToProps,
  { handleChange, addTodo }
)(App);
