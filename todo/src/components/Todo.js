import React from "react";
import { connect } from "react-redux";
import { todos, addTodo, completedTodo } from "../actions/index";
import "./Todo.css";
class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newTodo: ""
    };
  }

  handleNewTodoInput = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  handleAddNewFriend = e => {
    e.preventDefault();
    this.props.addTodo(this.state.newTodo);
    this.setState({ newTodo: "" });
  };
  render() {
    console.log(this.props);
    return (
      <div className="todo-container">
        {this.props.todos.map((todo, index) => (
          <div>
            <span className="delete-todo">&times;</span>
            <span
              className="todo"
              key={index}
              style={
                todo.completed
                  ? { textDecoration: "line-through", color: "green" }
                  : { textDecoration: "none" }
              }
              onClick={() => this.props.completedTodo(index)}
            >
              {todo.task}
            </span>
          </div>
        ))}
        <form onSubmit={this.handleAddNewFriend}>
          <input
            type="text"
            placeholder="Add New Todo"
            value={this.state.newTodo}
            name="newTodo"
            onChange={this.handleNewTodoInput}
          />
          <input type="submit" id="todo-submit" value="Add new Todo" />
        </form>
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
  { ...todos, addTodo, completedTodo }
)(Todo);
