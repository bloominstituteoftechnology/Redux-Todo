import React, { Component } from "react";
import { connect } from "react-redux";
import ToDoItem from "./ToDoItem";

class ToDoList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        {this.props.todos.map((todo, index) => (
          <ToDoItem key={index} todo={todo} index={index} />
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    todos: state.todos
  };
};

export default connect(mapStateToProps)(ToDoList);
