import React, { Component } from "react";
import { connect } from "react-redux";
import TodoComponent from "./TodoComponent";
import { ListGroup } from "reactstrap";

class TodoListComponent extends Component {
  render() {
    console.log("TodoList Comp:", this.props);
    return (
      <div>
        <h1>ToDo List Component Loaded</h1>
        <ListGroup>
          {this.props.todos.map(todo => {
            return <TodoComponent todo={todo.text} id={todo.id} />;
          })}
        </ListGroup>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    todos: state
  };
};

export default connect(mapStateToProps)(TodoListComponent);
