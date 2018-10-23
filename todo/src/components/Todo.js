import React from "react";
import { connect } from "react-redux";
import { todos, addTodo, completedTodo } from "../actions/index";
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
      <div>
        {this.props.todos.map((todo, index) => (
          <h3
            key={index}
            style={
              todo.completed
                ? { textDecoration: "line-through", color: "green" }
                : { textDecoration: "none" }
            }
            onClick={() => this.props.completedTodo(index)}
          >
            {todo.task}
          </h3>
        ))}
        <form onSubmit={this.handleAddNewFriend}>
          <input
            type="text"
            placeholder="Add New Todo"
            value={this.state.newTodo}
            name="newTodo"
            onChange={this.handleNewTodoInput}
          />
          <input type="submit" value="Add new Todo" />
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
