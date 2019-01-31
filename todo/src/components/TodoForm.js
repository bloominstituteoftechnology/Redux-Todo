import React from "react";
import { connect } from "react-redux";

import { addTodo } from "../actions";

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
          onSubmit={e => this.createNewTodo(e)}
          onClick={e => this.createNewTodo(e)}
        >
          Submit
        </button>
      </form>
    );
  }
}

const mstp = state => {};

export default connect(
  mstp,
  { addTodo: addTodo }
)(TodoForm);
