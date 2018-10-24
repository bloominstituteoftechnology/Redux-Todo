import React, { Component } from "react";

import { connect } from "react-redux";

import { TO_DO_CREATE, TO_DO_DELETE, TO_DO_COMPLETE } from "../actions";

class ToDo extends Component {
  constructor() {
    super(...arguments);
    this.state = {
      inputText: ""
    };
  }
  render() {
    return (
      <div className="to-do">
        <form onSubmit={this.submitHandler}>
          <input value={this.state.inputText} />
        </form>
      </div>
    );
  }

  submitHandler = eventSubmit => {
    eventSubmit.preventDefault();
    let taskText = this.state.inputText;
    this.setState({ inputText: "" });
    this.props.toDoCreate(taskText);
  };
}
function mapStateToProps(state) {
  return state;
}
export default connect(
  mapStateToProps,
  {
    TO_DO_CREATE,
    TO_DO_DELETE,
    TO_DO_COMPLETE
  }
)(ToDo);
