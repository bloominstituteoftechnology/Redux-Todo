import React from "react";
import { connect } from "react-redux";
import { Toggle } from "../actions/actions";

const TodoList = props => {
  return (
    <div className="list">
      {props.todos.map(todo => {
        return (
          <p
            style={{
              textDecoration: todo.completed ? "line-through" : "none"
            }}
            onClick={() => Toggle(todo.id)}
          >
            {todo.task}
          </p>
        );
      })}
    </div>
  );
};

const mapStateToProps = state => ({
  todos: state.todos
});

const mapDispatchToProps = dispatch => ({
  Toggle: id => dispatch(Toggle(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);