import React from 'react';
import { connect } from "react-redux";
import { clickTodo, deleteTodo } from '../actions';

const TodoItem = props => {
  return (
    <li id={props.todo.id} className={props.todo.completed ? 'todo-list__item is-completed': 'todo-list__item'}>
        <span onClick={e => {
        e.preventDefault();
        props.clickTodo(props.todo.id);
      }}>{props.todo.value}</span>
        <button className="todo-list__item-button" onClick={e => {
        e.preventDefault();
        props.deleteTodo(props.todo.id);
      }}>Delete</button>
      </li>
  );
}

const mapStateToProps = state => {
  return {
    todos: state.todos
  };
};

export default connect(mapStateToProps, { clickTodo, deleteTodo })(TodoItem);