import React from "react";
import { connect } from "react-redux";
import Todo from "./Todo";

const TodoList = props => {
  return (
    <ul className="todo-list">
      {props.todos.map((todo, index) => {
        return <Todo todo={todo} key={index} />;
      })}
    </ul>
  );
};

const mapStateToProps = state => {
  return {
    todos: state.todos
  };
};

export default connect(mapStateToProps)(TodoList);
