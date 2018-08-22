import React, { Component } from "react";
import { connect } from "react-redux";
import { addTodo } from "../actions";

class TodoInput extends Component {
  state = {
    inputValue: "",
    todos: []
  };

  handleText = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = event => {
    // console.log("submit")
    event.preventDefault();
    // const todos = [...this.state.todos];
    const todo = {
      value: this.state.inputValue,
      completed: false
    };

    this.props.addTodo(todo);
    this.setState({
      inputValue: ""
    });
  };

  render() {
    console.log(this.props.state);
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            onChange={this.handleText}
            name="inputValue"
            value={this.state.inputValue}
            type="text"
            placeholder="type here"
          />
          <button>Add</button>
        </form>
        {this.props.state.todos.map((todo, index) => {
          return <div key={index}>{todo.value}</div>;
        })}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    state
  };
};

export default connect(
  mapStateToProps,
  { addTodo }
)(TodoInput);
