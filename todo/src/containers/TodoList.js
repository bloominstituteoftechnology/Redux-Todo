import React from 'react';
import { connect } from "react-redux";
import TodoItem from './TodoItem';

const TodoList = props => {
  return (
    <ul className="todo-list">
      {props.todos.map((todo, i) => <TodoItem key={todo.id} todo={todo} /> )}
    </ul>
  );
}

const mapStateToProps = state => {
  return {
    todos: state.todos
  };
};

export default connect(mapStateToProps)(TodoList);