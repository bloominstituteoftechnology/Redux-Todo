import React, { Component } from "react";
import { connect } from "react-redux";
import { addNewTodo, completeTodo } from "../actions/";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

export class TodoContainer extends Component {
       
    render() {
    return (
      <div className="container todo">
        <TodoList toDo={this.props.todos}/>
        <TodoForm handleNewTodo={this.props.addNewTodo}/>
      </div>
    );
  }
}

const mapStateToProps = state => ({
    todos: state.todos
});

export default connect(
  mapStateToProps,
  { addNewTodo, completeTodo }
)(TodoContainer);
