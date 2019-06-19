import React, { Component } from "react";
import { connect } from "react-redux";
import { addItem } from "../actions/";

class AddItem extends Component {
  render() {
    return <p>Hello</p>;
  }
}

const mapStateToProps = state => {
  return {
    todos: state.todos
  };
};

export default connect(
  mapStateToProps,
  { addItem }(AddItem)
);
