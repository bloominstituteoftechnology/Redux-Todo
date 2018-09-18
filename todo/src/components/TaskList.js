import React, { Component } from "react";
import { connect } from 'react-redux';
// import actions
import { addTask } from '../actions';
import TaskForm from './TaskForm';
import Task from './Task';

class TaskList extends Component {
    

    render() {
        return (
            <div>
                <ul>
                    {this.props.tasks.map((task, id) => <Task  key={id} />)}
                </ul>
                <TaskForm />
            </div>
        )
    }
}

export default TaskList;