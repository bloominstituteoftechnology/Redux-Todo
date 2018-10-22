import React, { Component } from "react";
import { connect } from "react-redux";
import { addTodo } from "./actions/index";

class App extends Component {
  constructor() {
    super();
    this.state = {
      // idCount : null,
      todoText: ""
    };
  }

  handleChanges = ev => {
    this.setState({ todoText: ev.target.value });
  };

  addNewTodo = ev => {
    ev.preventDefault();

    this.props.addTodo({
      id: this.props.idCount,
      todoText: this.state.todoText
    });

    this.setState({ todoText: "" });
  };

  render() {
    return (
      <div>
        <input
          type="text"
          name="inputText"
          onChange={this.handleChanges}
          placeholder="New title"
          value={this.state.todoText}
        />
        <button onClick={this.addNewTodo}>add</button>

        {this.props.todos.map(todo => (
          <p key={todo.id}>
            {" "}
            {todo.id} : {todo.todoText}
          </p>
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state);
  return {
    todos: state.todoList,
    idCount: state.idCount
  };
};

export default connect(
  mapStateToProps,
  { addTodo }
)(App);
