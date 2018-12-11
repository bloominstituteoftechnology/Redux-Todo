import React from "react";
import { connect } from "react-redux";
import { addTodo, deleteTodo } from "../actions/actions";

class AddTodo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todo: ""
    };
  }
  inputHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  formSubmitHandler = e => {
    e.preventDefault();
    this.props.addTodo(this.state.todo);
    this.setState({ todo: "" });
  };
  deleteCompleted = () => {
    this.props.deleteTodo()
  };

  render() {
    return (
      <div>
        <form onSubmit={this.formSubmitHandler}>
          <input
            type="text"
            name="todo"
            value={this.state.todo}
            onChange={this.inputHandler}
          />
          <button type="submit">Add Task </button>
        </form>{" "}
        <button onClick={this.deleteCompleted}>Clear Completed Tasks</button>
      </div>
    );
  }
}

export default connect(
  () => ({}),
  { addTodo, deleteTodo }
)(AddTodo);
