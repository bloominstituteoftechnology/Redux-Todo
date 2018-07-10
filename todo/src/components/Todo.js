import React from 'react';
import {connect} from 'react-redux';
import {deleteTodo} from '../actions/index';

const Todo = (props) => {
    const toggleComplete = () => {
        props.deleteTodo(props.todo)
    }

    return (
        <div>
            <button onClick={toggleComplete}> Delete</button>
            <p>{props.todo}</p>
        </div>
    )
}

export default connect(null, {deleteTodo})(Todo);