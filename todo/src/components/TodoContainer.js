import React, { Component } from "react";
import { connect } from "react-redux";
import { addNewTodo, completeTodo } from "../actions/";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

export class TodoContainer extends Component {
  constructor() {
    super();
    this.state = {
      inputText: ""
    };
  }

  handleInputChange = event => {
    event.preventDefault();
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  addNewTodo = event => {
    event.preventDefault();
    this.props.addNewTodo(this.state.inputText);
    this.setState({ inputText: "" });
  };

  render() {
    return (
      <div className="container todo">
        <TodoList toDo={this.props.todos} />
        <TodoForm
          handleNewToDo={this.addNewTodo}
          handleInputChange={this.handleInputChange}
          inputText={this.state.inputText}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  todos: state.todos
});

export default connect(
  mapStateToProps,
  { addNewTodo, completeTodo }
)(TodoContainer);
