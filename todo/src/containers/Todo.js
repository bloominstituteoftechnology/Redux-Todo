import React, { Component } from "react";
// import { connect } from "react-redux";
import './styles.css';

class Todo extends Component {
  render() {
    return (
      <div className="todoItemContainer">
        <li className={ this.props.todo.completed ? "todoItem completed" : "todoItem"} onClick={() => this.props.toggleCompleted(this.props.index)}>{this.props.todo.value}</li>
        <button onClick={() => this.props.deleteTodo(this.props.index)} className="deleteButton">X</button>
      </div>
    );
  }
}

export default Todo;