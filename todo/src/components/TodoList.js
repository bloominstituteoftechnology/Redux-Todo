import React from "react";
import Todo from './Todo';
import { addTodo, deleteTodo } from "../actions";
import { connect } from "react-redux";

const TodoList = props => {
  return (
    <div>
      {props.todos.map(todo => {
          return (
            <Todo todo={todo.task}/>
          );
        }
      )}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    todos: state
  };
};

export default connect(
  mapStateToProps,
  { addTodo, deleteTodo }
)(TodoList);
