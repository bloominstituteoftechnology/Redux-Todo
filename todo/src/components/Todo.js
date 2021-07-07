import React from 'react';
import PropTypes from 'prop-types';
import { removeTodo } from '../actions';

const Todo = props => {
  return <div> <li
          key={props.todo.id}
          onClick={event =>
            props.handleClick(event, props.todo.id)}
            >{props.todo.text}
            </li>

            <button onClick={(event) => {
              console.log(props.todo.id);
            removeTodo(props.todo.id);
          }}
            >Delete</button>
</div>
}

Todo.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.number,
    completed: PropTypes.bool,
    text: PropTypes.string
  })
}


export default Todo;
