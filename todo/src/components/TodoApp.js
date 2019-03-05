import React, { Component } from "react";
import { connect } from "react-redux";
import { addTodo } from "../actions/index";

class TodoApp extends Component {
  state = {
    newTodo: ""
  };

  handleChanges = e => {
    this.setState({ newTodo: e.target.value });
  };

  addFriendToList = e => {
    e.preventDefault();
    this.props.addTodo(this.state.newTodo);
    console.log(this.state.newTodo);
  };

  render() {
    return (
      <>
        <div className="TodoList">
          {this.props.todoList.map(item => (
            <h4>{item.todoItem}</h4>
          ))}
        </div>
        <input
          name="newTodo"
          type="text"
          value={this.state.newTodo}
          onChange={this.handleChanges}
          placeholder="Add a new Todo"
        />
        <button onClick={this.addFriendToList}>Add Todo</button>
      </>
    );
  }
}

const mapStateToProps = state => ({
  todoList: state.todoItems
});

export default connect(
  mapStateToProps,
  { addTodo }
)(TodoApp);
