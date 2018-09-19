import React, { Component } from 'react';
import { connect } from 'react-redux';

import { addTask, toggleTask } from '../store/actions';
import TaskList from '../components/TaskList';

class TaskContainer extends Component {
    state = {
        tskipt: ""
    }

    handleChange = event => {
        this.setState({
            tskipt: event.target.value
        });
    }

    addTask = event => {
        event.preventDefault();
        this.props.addTask(this.state.tskipt);
    }

    toggleTask = index => {
        this.props.toggleTask(index);
    }

    render() {
        return (
            <TaskList tsklst={this.props.tasks} handleChange={this.handleChange} tskipt={this.tskipt} tskad={this.addTask} tsktgl={this.toggleTask} />
        )
    }
}

const mapStateToProps = state => ({
    tasks: state.tasks
})

export default connect(mapStateToProps, { addTask, toggleTask })(TaskContainer);
