import React, { Component } from "react";
import Todo from "./Todo";

export class TodosList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      textField: ""
    };
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  submitHandler = e => {
    e.preventDefault();
    const todo = {
      value: this.state.textField,
      completed: false
    };
    this.props.updateState(todo);
    this.setState({
      textField: ""
    });
  };
  render() {
    return (
      <div>
        {this.props.todos.map(todo => (
          <Todo todo={todo} key={todo.value} />
        ))}
        <form onSubmit={this.submitHandler}>
          <input
            type="text"
            value={this.state.textField}
            name="textField"
            onChange={this.handleChange}
          />
        </form>
      </div>
    );
  }
}

export default TodosList;
