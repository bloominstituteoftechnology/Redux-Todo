import React, { Component } from "react";
import { connect } from "react-redux";

import { addTodo, removeTodo, checkTodo } from "../actions";
import "./../index.css";

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todoInput: ""
    };
  }

  handleAddTodo = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div>
        {this.props.todos.map((todo, index) => (
          <div
            key={todo + index}
            onClick={() => {
              this.props.checkTodo(todo);
            }}
          >
            {todo}
          </div>
        ))}
        <input
          type="text"
          name="todoInput"
          value={this.state.todoInput}
          placeholder="add todo"
          onChange={this.handleAddTodo}
        />
        <button
          onClick={() => {
            if (this.state.todoInput === "") alert("Fill in input!");
            else if (!this.props.todos.includes(this.state.todoInput)) {
              this.props.addTodo(this.state.todoInput);
              this.setState({ todoInput: "" });
            } else alert("No duplicates allowed!");
          }}
        >
          Add Todo
        </button>
        <button
          onClick={() => {
            this.props.removeTodo(this.state.todoInput);
            this.setState({ todoInput: "" });
          }}
        >
          Remove Todo
        </button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    todos: state.todos
  };
};

export default connect(mapStateToProps, { addTodo, removeTodo, checkTodo })(
  TodoList
);
