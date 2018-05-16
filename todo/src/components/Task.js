import React from 'react';
import { connect } from 'react-redux';
import { handleDelete } from '../actions';

const Task = (props) => {
    const toggleComplete = () => {
        props.handleDelete(props.task)
    }
    
    return <p className="task-item">{props.task}<button onClick={toggleComplete}>Delete</button></p>
}
export default connect(null, { handleDelete })(Task);