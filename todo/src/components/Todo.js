import React from 'react';
import { connect } from 'react-redux';
import { toggleTodo } from '../actions';

/*
 * Display individual todo item
 * Takes in props:
 * -- id: 0
 * -- value: ""
 * -- completed: bool
 */
const Todo = (props) => {
  const cName = props.completed === true ? "todo-done" : "todo-active";

  return (
    <li id={props.id} className={cName} onClick={() => props.toggleTodo(props.id)}>
      {props.value}
    </li>
  );
};

export default connect(null, { toggleTodo })(Todo);