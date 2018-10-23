import React, { Component } from "react";
import { connect } from "react-redux";
import { addTodo } from "./actions/index";

class App extends Component {
  constructor() {
    super();
    this.state = {
      todoText: ""
    };
  }

  handleChanges = ev => {
    this.setState({ todoText: ev.target.value });
  };

  addNewTodo = ev => {
    ev.preventDefault();

    this.props.addTodo({
       todoText: this.state.todoText
    });

    this.setState({ todoText: "" });
  };

  render() {
    console.log(this.props.todos);
    return (
      <div>
        
        <input
          type="text"
          name="inputText"
          onChange={this.handleChanges}
          placeholder="New Todo"
          value={this.state.todoText}
        />
        <button onClick={this.addNewTodo}>add</button>
        <ul>
        {this.props.todos.map((todo, index) => (
          <li key={index}> {index} : {todo.todoText}  </li>
        ))}

        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state);
  return {
    todos: state.todoList,
   };
};

export default connect(
  mapStateToProps,
  { addTodo }
)(App);
