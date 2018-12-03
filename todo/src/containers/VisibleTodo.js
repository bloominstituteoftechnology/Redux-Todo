import React, { Component } from "react";
import PropTypes from "prop-types";
import Form from "../components/Form";
import Todo from "../components/Todo";

class VisibleTodo extends Component {
  static propTypes = {
    prop: PropTypes
  };

  render() {
    return (
      <>
        <Form />
        <Todo />
      </>
    );
  }
}

export default VisibleTodo;
