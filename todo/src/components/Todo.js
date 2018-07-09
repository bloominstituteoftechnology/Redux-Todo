import React from 'react';
import { connect } from 'react-redux';
import { deleteTodo } from '../actions';

const Todo = (props) => {
    const toggleComplete = () => {
        props.deleteTodo(props.todo)
    }

    return (
        <div>
            <button onClick={toggleComplete}>Delete This</button>
            <p>{props.todo}</p>


        </div>
    )
}




export default connect(null, { deleteTodo })(Todo);