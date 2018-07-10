import React from 'react';
import { connect } from "react-redux";
import { clickTodo } from '../actions';

const TodoList = props => {
  return (
    <ul className="todo-list">
      {props.todos.map((todo, i) => <li key={todo.id} id={todo.id} onClick={e => {
        e.preventDefault();
        props.clickTodo(todo.id);
      }} className={todo.completed ? 'todo-list__item is-completed': 'todo-list__item'}>{todo.value}</li>)}
    </ul>
  );
}

const mapStateToProps = state => {
  return {
    todos: state.todos
  };
};

export default connect(mapStateToProps, { clickTodo })(TodoList);