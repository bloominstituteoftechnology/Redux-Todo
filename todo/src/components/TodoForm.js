import React from "react";
import { connect } from "react-redux";

import { addTodo } from "../actions";
import { deleteTodo } from "../actions";

class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: ""
    };
  }
  changeInputValue = e => {
    this.setState({
      inputValue: e.target.value
    });
  };
  createNewTodo = e => {
    e.preventDefault();
    this.props.addTodo(this.state.inputValue);
    this.setState({
      inputValue: ""
    });
  };
  deleteCompleteTodo = e => {
    e.preventDefault();
    this.props.deleteTodo();
  };
  render() {
    return (
      <form>
        <input
          type="text"
          onChange={e => this.changeInputValue(e)}
          value={this.state.inputValue}
          placeholder="Input Task..."
        />
        <button
          className="submit"
          onSubmit={e => this.createNewTodo(e)}
          onClick={e => this.createNewTodo(e)}
        >
          Submit
        </button>
        <button
          className="delete"
          onSubmit={e => this.deleteCompleteTodo(e)}
          onClick={e => this.deleteCompleteTodo(e)}
        >
          Delete
        </button>
      </form>
    );
  }
}

const mstp = state => {
  return {};
};

export default connect(
  mstp,
  { addTodo: addTodo, deleteTodo: deleteTodo }
)(TodoForm);
