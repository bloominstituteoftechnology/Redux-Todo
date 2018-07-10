import React from 'react';
import {connect} from 'react-redux';
import {deleteTodo} from '../actions/index';

const Todo = (props) => {
    const toggleComplete = () => {
        props.deleteTodo(props.todo)
    }

    return (
        <div>
            <p>{props.todo}</p>
            <button onClick={toggleComplete}> Completed</button>
        </div>
    )
}

export default connect(null, {deleteTodo})(Todo);