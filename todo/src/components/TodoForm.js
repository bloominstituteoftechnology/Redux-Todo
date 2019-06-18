import React, { Component } from "react";
import { connect } from "react-redux";
import { addNewTodo } from "../actions/index";

class TodoForm extends Component {
  state = {
    newTodo: ""
  };

  handleChanges = e => {
    e.preventDefault();
    this.setState({ newTodo: e.target.value });
  };

  addTodo = e => {
    e.preventDefault();
    this.props.addNewTodo(this.state.newTodo);
    this.setState({ newTodo: "" });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.addTodo}>
          <input
            type="text"
            placeholder="add item"
            value={this.state.newTodo}
            onChange={this.handleChanges}
          />
        </form>
      </div>
    );
  }
}

const mapStateToProps = () => ({});

export default connect(
  mapStateToProps,
  { addNewTodo }
)(TodoForm);
