import React, { Component } from "react";
import { connect } from "react-redux";
import { addTodo, removeTodo, checkTodo } from "../actions";

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
            onClick={() => {
              console.log(todo);
            }}
            key={todo + index}
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
            this.props.addTodo(this.state.todoInput);
            this.state.todoInput = "";
          }}
        >
          Add Todo
        </button>
        <button
          onClick={() => {
            this.props.removeTodo(this.state.todoInput);
            this.state.todoInput = "";
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
