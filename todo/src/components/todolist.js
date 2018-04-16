import React, { Component } from "react";
import { connect } from "react-redux";
import { addtodo, removetodo, checktodo } from "../actions";

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newTodo: "",
      todos: ["starting item"],
      classes: [""]
    };
  }

  handleAddTodo = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmitTodo = () => {
    const { todos } = this.state;
    if (this.state.newTodo !== "") todos.push(this.state.newTodo);
    this.setState({ todos, newTodo: "" });
  };

  handleCheckTodo = e => {
    console.log("YOU CHECKED IT BRUV");
  };

  render() {
    console.log(this.state);
    return (
      <div>
        {this.state.todos.map((todo, index) => (
          <div
            onClick={() => {
              console.log(todo);
            }}
            key={todo + index}
          >
            {todo}
          </div>
        ))}
        {/* <TodoList {...this.state} /> */}
        <input
          type="text"
          name="newTodo"
          value={this.state.newTodo}
          placeholder="add todo"
          onChange={this.handleAddTodo}
        />
        <button onClick={this.handleSubmitTodo}>Add Todo</button>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    todos: state
  };
};

export default connect(mapStateToProps, { addtodo, removetodo, checktodo })(
  TodoList
);
