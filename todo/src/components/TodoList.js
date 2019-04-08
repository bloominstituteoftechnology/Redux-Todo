import React from "react";
import { connect } from "react-redux";
import { addTodo, toggleTodo } from "../actions";

class TodoList extends React.Component {
  render() {
    return (
      <ul>
        {this.props.todos.map(todo => {
          return <li>{todo.value}</li>;
        })}
      </ul>
    );
  }
}

const mapStateToProps = state => {
  return {
    todos: state.todos
  };
};

export default connect(
  mapStateToProps,
  (addTodo, toggleTodo)
)(TodoList);
