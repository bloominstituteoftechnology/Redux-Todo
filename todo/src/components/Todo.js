import React, { Component } from "react";
import { connect } from "react-redux";
import { addNewTodo } from "../actions/index";

class Todo extends Component {
  state = {
    isCompleted: false
  };
  handleChanges = e => {
    this.setState({ isCompleted: !this.state.isCompleted });
  };

  render() {
    return (
      <div>
        <input
          type="checkbox"
          checked={this.state.isCompleted}
          onChange={this.handleChanges}
        />
        <p>{this.props.content}</p>
      </div>
    );
  }
}

const mapStateToProps = () => ({});

export default connect(
  mapStateToProps,
  { addNewTodo }
)(Todo);
