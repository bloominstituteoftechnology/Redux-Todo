import React, { Component } from "react";
import { connect } from "react-redux";
import { selectToDo } from "../actions";
import { bindActionCreators } from "redux";

class ToDoList extends Component {
  renderToDoList() {
    return this.props.todos.map((item, i) => {
      return (
        <div onClick={() => this.props.selectToDo(item)} key={i}>
          {item.value} {item.completed}
        </div>
      );
    });
  }

  render() {
    // pass to this.props.selectToDo(todo) on click
    return (
      <div>
        <div>{this.renderToDoList()}</div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    todos: state.todos
  };
};

//methods on the returned object will be a prop
// When we call selectToDO we should pass the action to all reducers
const mapDispatchToProps = dispatch => {
  return bindActionCreators({ selectToDo: selectToDo }, dispatch);
};

// connect mapStateToProps and mapDispatchToProps to ToDoList.js
export default connect(mapStateToProps, mapDispatchToProps)(ToDoList);
