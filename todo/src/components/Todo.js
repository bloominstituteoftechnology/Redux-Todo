import React from 'react';
import PropTypes from 'prop-types';
import { removeTodo } from '../actions';

const Todo = props => {
  return <li
          key={props.todo.id}
          onClick={event =>
            props.handleClick(event, props.todo.id)}
            >{props.todo.text}<button onClick={() => {
            removeTodo(props.todo.id)}}
            >Delete</button>
            </li>;

}

Todo.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.number,
    completed: PropTypes.bool,
    text: PropTypes.string
  })
}


export default Todo;
