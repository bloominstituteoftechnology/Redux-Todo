import React from "react";
import Todo from "./Todo";
import { connect } from "react-redux";
import { addTodo } from "../actions";
import { toggleTodo } from "../actions";

class Container extends React.Component {
  constructor() {
    super();
    this.state = {
      task: "",
    };
  }

  handleInputChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleAddTodo = event => {
    event.preventDefault();
    event.target.reset();
    this.props.addTodo(this.state.task);
    this.setState({ task: "" });
  };

  handleToggleTodo = id => {
    this.props.toggleTodo(id);
  };

  

  render() {
    return (
      <div>
        <div>
          {this.props.todos.map((todo, index) => (
            <Todo
              key={`${todo.text}${index}`}
              id={todo.id}
              todo={todo}
              handleToggle={this.handleToggleTodo}
            />
          ))}
        </div>
        <form onSubmit={this.handleAddTodo}>
          <input
            onChange={this.handleInputChange}
            name="task"
            type="text"
            placeholder="type a todo item"
          />
          <button type="submit">add todo</button>
        </form>
        <button onClick={this.handleCompleted}>remove completed</button>
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
  { addTodo, toggleTodo }
)(Container);
