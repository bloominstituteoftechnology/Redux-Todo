import React, { Component } from "react";
import { connect } from "react-redux";
import { addTodo, toggleTodo, removeTodos, getTodos } from "../actions";

class TodoList extends Component {
  constructor() {
    super();
    this.state = {
      text: ""
    };
  }

  componentDidMount() {
    const myTodos = JSON.parse(localStorage.getItem("todos"));
    if (myTodos !== null) {
      this.props.getTodos(myTodos);
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.todos !== this.props.todos) {
      localStorage.setItem("todos", JSON.stringify(nextProps.todos));
    }
  }

  handleTodoComplete = id => {
    this.props.toggleTodo(id);
  };

  handleInput = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  addTodoHandler = e => {
    e.preventDefault();
    const { text } = this.state;
    const newTodo = {
      text,
      completed: false,
      id: this.props.todos ? this.props.todos.length + text : 0 + text
    };
    this.props.addTodo(newTodo);
    this.setState({
      text: ""
    });
  };

  removeTodos = () => {
    this.props.removeTodos();
  };
  render() {
    const { todos } = this.props;
    return (
      <div>
        <form onSubmit={this.addTodoHandler}>
          <input
            onChange={this.handleInput}
            name="text"
            value={this.state.text}
          />
          <button type="button" onClick={this.addTodoHandler}>
            Add Todo
          </button>
        </form>
        <ul>
          {todos.map(todo => {
            return (
              <li
                onClick={() => this.handleTodoComplete(todo.id)}
                style={
                  todo.completed
                    ? { color: "#d3d3d3", textDecoration: "line-through" }
                    : null
                }
                key={todo.id}
              >
                {todo.text}
              </li>
            );
          })}
        </ul>
        <button onClick={this.removeTodos}>Clear Completed</button>
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
  {
    addTodo,
    toggleTodo,
    removeTodos,
    getTodos
  }
)(TodoList);
