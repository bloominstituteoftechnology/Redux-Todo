import React from 'react';
import { connect } from "react-redux";
import { clickTodo } from '../actions';

const TodoItem = props => {
  return (
    <li id={props.todo.id} onClick={e => {
        e.preventDefault();
        props.clickTodo(props.todo.id);
      }} className={props.todo.completed ? 'todo-list__item is-completed': 'todo-list__item'}>{props.todo.value}</li>
  );
}

const mapStateToProps = state => {
  return {
    todos: state.todos
  };
};

export default connect(mapStateToProps, { clickTodo })(TodoItem);