import React from "react";
import { connect } from "react-redux";
import { handleInput, addTodo } from "../../actions";

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
      <form>
        <input
          type="text"
          placeholder="add a todo here..."
          onChange={this.handleChange}
          value={this.props.input}
        />
        <div className="buttons-wrapper">
          <button className="btn-add" onClick={this.handleSubmit}>Add todo</button>
        </div>
      </form>
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
