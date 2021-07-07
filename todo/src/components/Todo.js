import React from 'react';
import PropTypes from 'prop-types';

const Todo = ({ onClick, completed,text ,deleteTodo}) => (
    <div>
    <li
    onClick = {onClick}
    style = { {
        textDecoration: completed ? 'line-through' : 'none'
    }}
    >
    {text}
    </li>
  
     <button onClick={deleteTodo}>
        Delete
     </button>
     </div>
)

Todo.propTypes = {
    onClick: PropTypes.func.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
}


export default Todo;

