import React, { Component } from "react";
import { connect } from "react-redux";
import { addTodo, toggleComplete, clearTodo } from "../actions";

class Todo extends Component {
  constructor() {
    super();
    this.state = {
      inputText: ""
    };
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  toggleComplete = index => {
    this.props.toggleComplete(index);
  };

  handleAddTodo = event => {
    event.preventDefault();
    this.props.addTodo(this.state.inputText);
    this.setState({
      inputText: ""
    });
  };

  handleClearTodo = event => {
    event.preventDefault();
    this.props.clearTodo();
  };

  render() {
    return (
      <>
        <section className="todo-list">
          <h1>Todo List</h1>
          {this.props.todos.map((todo, index) => (
            <div
              onClick={() => this.toggleComplete(index)}
              key={todo.id}
              className={`${todo.complete}`}
            >
              {todo.task}
            </div>
          ))}

          <input
            type="text"
            name="inputText"
            onChange={this.handleChange}
            placeholder="Add Todo"
            value={this.state.inputText}
            autoComplete="off"
            className="todo-list-input"
          />
          <button onClick={this.handleAddTodo}>Add Todo</button>
          <button onClick={this.handleClearTodo}>Clear</button>
        </section>
      </>
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
  {
    addTodo,
    toggleComplete,
    clearTodo
  }
)(Todo);
