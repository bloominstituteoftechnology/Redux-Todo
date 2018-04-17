import React, { Component } from "react";
import { connect } from "react-redux";

import { addTodo, removeTodo, checkTodo } from "../actions";
import "./../index.css";
import TodoItem from "./TodoItem";

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
        {/* <TodoItem /> */}
        {this.props.todos.map((todo, index) => (
          <div
            // onClick={() => {
            //   this.props.checkTodo(todo);
            // }}
            key={todo + index}
          >
            <TodoItem todo={todo} />
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
            this.props.addTodo(this.state.todoInput);
            this.setState({ todoInput: "" });
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
