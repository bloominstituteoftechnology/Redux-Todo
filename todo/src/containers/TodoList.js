import React from 'react';
import { connect } from "react-redux";

const TodoList = props => {
  return (
    <ul className="todo-list">
      {props.todos.map((todo, i) => <li key={`${Math.random()}-${i}`}>{todo.value}</li>)}
    </ul>
  );
}

const mapStateToProps = state => {
  return {
    todos: state.todos
  };
};

export default connect(mapStateToProps)(TodoList);