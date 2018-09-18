import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import { increment, decrement } from '../actions';

const Todos = props => {
  return (
    <li
      className={props.todo.completed ? 'completed' : null}
      onClick={() => {
        props.completeTodo(props.todo.id);
      }}
      id={props.todo.id}
    >
      {props.todo.todo}
    </li>
  );
};
export default Todos;
