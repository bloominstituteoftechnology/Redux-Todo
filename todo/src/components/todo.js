import React from 'react';
import PropTypes from 'prop-types';

function Todo(props) {
    return (
        <li 
            onClick={ () => props.toggleComplete(props.index) } 
            className={ props.todo.completed ? 'strike-through' : '' }
        >{props.todo.value}
        </li>
    );
}

Todo.propTypes = {
    todo: PropTypes.shape({
        value: PropTypes.string.isRequired,
        completed: PropTypes.bool.isRequired
    }),
    index: PropTypes.number.isRequired
};

export default Todo;
