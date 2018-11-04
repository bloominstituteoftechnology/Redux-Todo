import React, { Component } from "react";
import AddTodo from "../components/AddTodo";
import Todo from "../components/todo";

class TodoList extends Component {
  render() {
    return (
      <div>
        <AddTodo />
      </div>
    );
  }
}
export default TodoList;
