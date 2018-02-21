import React, { Component } from "react";
import { connect } from "react-redux";
import { add_todo } from "../actions";

class App extends Component {
  state = {
    todo: "",
    display: false,
  };

  render() {
    console.log("Props: ", this.props);
    return (
      <div>
        <h1> To Do List </h1>
        <ul>
          {/* I know index is bad practive */}
          {this.props.todos.map((item, index) => {
            return <li key={index}> {item.todo} </li>;
          })}
        </ul>
        <input
          type="text"
          name="todo"
          value={this.state.todo}
          onChange={this.handleInputChange}
        />
        <button onClick={() => this.props.add_todo(this.state)}>
          Add To Do to the List
        </button>{" "}
      </div>
    );
  }
  handleInputChange = event => {
    const todo = event.target.value;
    this.setState({ todo: todo });
  };
}

const mapStateToProps = state => {
  console.log("State: ", state);
  return {
    todos: state
  };
};

export default connect(mapStateToProps, { add_todo })(App);
