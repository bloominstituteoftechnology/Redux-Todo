import React from "react";
import { connect } from "react-redux";

import { addTodo } from "../actions";

class TodoListContainer extends React.Component {
  state = {
    todoInput: {
      value: "",
      completed: null
    }
  };

  handleChange = event => {
    event.persist();
    this.setState(prevState => {
      return {
        todoInput: {
          ...prevState.todoInput,
          [event.target.name]: event.target.value
        }
      };
    });
  };

  handleAddTodo = (event, todo) => {
    event.preventDefault();
    this.props.addTodo(todo);
  };

  render() {
    const todo = {
      value: this.state.todoInput.value,
      completed: false
    };
    return (
      <div className="todo-list-container">
        <input
          onChange={this.handleChange}
          type="text"
          placeholder="Enter todo..."
          autoComplete="off"
          name="value"
          value={this.state.todoInput.value}
        />
        <button onClick={event => this.handleAddTodo(event, todo)}>
          Add todo
        </button>
        {this.props.todos.map(todo => (
          <ul style={{ textDecoration: todo.completed && "line-through" }}>
            {todo.value}
          </ul>
        ))}
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
)(TodoListContainer);

// mapStateToProps, {actions}
