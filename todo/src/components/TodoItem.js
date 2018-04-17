import React, { Component } from "react";
import { connect } from "react-redux";

// import { addTodo, removeTodo, checkTodo } from "../actions";

class TodoItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todo: this.props.todo
      //completed: false
    };
  }

  checkIt = () => {
    this.setState({ completed: true });
  };

  uncheckIt = () => {
    this.setState({ completed: false });
  };

  render() {
    if (this.state.completed !== true) {
      return <div onClick={this.checkIt}>{this.props.todo}</div>;
    }
    if (this.state.completed === true) {
      return <strike onClick={this.uncheckIt}>{this.props.todo}</strike>;
    }
    return "";
  }
}

// export default TodoItem;

const mapStateToProps = state => {
  return {
    todos: state.todos
    // completed: state.completed
  };
};

export default connect(mapStateToProps, {})(TodoItem);
