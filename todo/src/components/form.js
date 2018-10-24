import React from "react";
import { connect } from "react-redux";
import { addTodo, toggleTodo, deleteTodo } from "../actions/index";

class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      inputText: ""
    };
  }

  handleChanges = ev => {
    this.setState({ [ev.target.name]: ev.target.value });
  };

  handleClick = ev => {
    ev.preventDefault();
    console.log("Button clicked");
    this.props.addTodo(this.state.inputText);
    this.setState({ inputText: "" });
  };

  render() {
    console.log(this.props);
    return (
      <div>
        <h1>Todo List</h1>
        <input
          type="text"
          name="inputText"
          onChange={this.handleChanges}
          placeholder="New title"
          value={this.state.inputText}
        />
        <button onClick={this.handleClick}>Add Todo</button>
        <button onClick={() => this.props.deleteTodo()}>Delete</button>

        {this.props.todos.map((todo, index) => (
          <div key={index}>
            <h3 onClick={() => this.props.toggleTodo(index)} className={todo.completed ? "line-through" : null}>
              {todo.todo}
            </h3>
          </div>
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    todos: state
  };
};

export default connect(
  mapStateToProps,
  { addTodo, toggleTodo, deleteTodo }
)(Form);
