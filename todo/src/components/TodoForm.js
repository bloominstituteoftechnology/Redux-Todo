import React from "react";
import { connect } from "react-redux";
import { handleInput, addTodo } from "../actions";

class TodoForm extends React.Component {
  handleChange = e => {
    this.props.handleInput(e.target.value);
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.addTodo();
  };
  render() {
    return (
      <div className="header">
        <h2>Let's Do This!</h2>
        <div className="input">
          <input
            type="text"
            value={this.props.input}
            id="myInput"
            placeholder="What to do..."
            onChange={this.handleChange}
          />
          <button onClick={this.handleSubmit} className="addBtn">
            Add
          </button>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    todos: state.todos,
    input: state.input
  };
};
export default connect(
  mapStateToProps,
  { handleInput, addTodo }
)(TodoForm);
