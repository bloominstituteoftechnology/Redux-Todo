import React from "react";
import { connect } from "react-redux";

import { addItem } from "../actions";

class ToDoList extends React.Component {
  state = {
    todos: []
  };

  render() {
    return <div>Hello</div>;
  }
}

const mapStateToProps = state => {
  return {
    todos: state.todoList.items
  };
};

export default connect(
  mapStateToProps,
  { addItem }
)(ToDoList);
