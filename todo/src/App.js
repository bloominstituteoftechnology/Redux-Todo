import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Todos from "./components/Todos";
import TodoForm from "./components/TodoForm";
import { connect } from "react-redux";
import { addTodo, deleteTodo } from './actions';

class App extends Component {
  state = {
      todoText: "",
    };
  }

  handleInputChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  addTodo = () => {
    const { todoText } = this.state;
    const newTodo = {
      id: this.props.todos.length + 1,
      completed: false,
      text: todoText
    };
    this.props.addTodo(newTodo);
    this.setState({ todoText: '' });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <TodoForm
          handleInputChange={this.handleInputChange}
          todoText={this.state.todoText}
          addTodo={this.addTodo}
        />
        <div className="App-intro">
          <Todos todos={this.props.todos} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    todos: state
  };
};

export default connect(
  mapStateToProps,
  { addTodo, deleteTodo }
)(App);
