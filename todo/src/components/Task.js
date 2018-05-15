import React from 'react';
import { connect } from 'react-redux';
import { deleteTask } from '../actions';

const Task = (props) => {
    const toggleComplete = () => {
        props.deleteTask(props.task)
    }

    return (
        <div className="task-item">
         <p className="task-content">{props.task}</p>
         <button className="delete-task" onClick={toggleComplete}>Delete</button>
        </div>
    )
}

export default connect(null, { deleteTask })(Task);