import React from 'react';
import {connect} from 'react-redux';
import { addItem } from '../actions/index';

class List extends React.Component {
    constructor() {
        super();
        this.state = {
            taskText: ''
        }
    }

changeHandler = event => {
    this.setState({ [event.target.name]: event.target.value });
};

taskHandler = event => {
    event.preventDefault();
    this.props.addItem(this.state.taskText);
}

render() {
    return (
        <div>
            <h1>To-Do List</h1>
            <input
            type = "text"
            name = "taskText"
            onChange = {this.changeHandler}
            placeholder = "new task"
            value = {this.state.taskText}
            />
            <button onClick = {this.addItem}>Add Task</button>
        </div>
    )
}
}
const mapStateToProps = state => {
    return {
        tasks: state.tasks
    };
};

export default connect(
    mapStateToProps,
    {addItem}
)(List);