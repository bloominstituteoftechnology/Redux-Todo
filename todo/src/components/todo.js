import React from 'react';
import { connect } from 'react-redux';
import { toggleTodo } from '../actions';

import styles from './todo.module.css';

const Todo = ({ dispatch, todo, id }) => (
  <li
    className={todo.completed ? styles.completed : styles.incomplete}
    onClick={() => dispatch(toggleTodo(id))}
  >
    {todo.value}
		<div className={styles.trash}>

		</div>
  </li>
);

export default connect()(Todo);
