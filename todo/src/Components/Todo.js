import React from "react";
import { connect } from "react-redux";
import { toggleComplete } from "../actions";

const Todo = props => (
  <li onClick={_ => props.toggleComplete(props.id)}> {props.todo} </li>
);

const mapStateToProps = state => {
  return {
    todoList: state.todoList
  };
};

export default connect(
  mapStateToProps,
  { toggleComplete }
)(Todo);
