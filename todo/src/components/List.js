import React from 'react';
import Task from './Task';
import { connect } from 'react-redux';

const List = (props) => {
    console.log(props);
    return (
        <div className="list">
            {props.task.map((task, i) => {
                return <Task key={i} task={task} />
            })}
        </div>
    )
} 

const mapStateToProps = state => {
    console.log(state);
    return {
        task: state
    }
}

export default connect(mapStateToProps)(List);