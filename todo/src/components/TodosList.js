import React, { Component } from "react";
import { connect } from "react-redux";
import Todo from "./Todo";
import { addTodo } from "../actions";


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
    this.props.addTodo(todo);
    this.setState({
      textField: ""
    });
  };
  render() {
    return (
      <div>
        {this.props.todos.map((todo, index) => (
          <Todo  todo={todo} key={index} index={index} />
        ))}
        <form onSubmit={this.submitHandler}>
          <input
            type="text"
            value={this.state.textField}
            name="textField"
            onChange={this.handleChange}
          />
          <button type="submit">Submit</button>
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
  { addTodo }
)(TodosList);
