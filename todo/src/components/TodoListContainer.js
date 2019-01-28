import React from "react";
import { connect } from "react-redux";

const TodoListContainer = props => {
  return (
    <div className="todo-list-container">
      {props.todos.map(todo => (
        <ul style={{ textDecoration: todo.completed && "line-through" }}>
          {todo.value}
        </ul>
      ))}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    todos: state.todos
  };
};

export default connect(
  mapStateToProps,
  {}
)(TodoListContainer);

// mapStateToProps, {actions}
