import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTask } from '../actions';

class NewTask extends Component {
    constructor(props) {
        super(props);
        this.state = {
            task: ''
        }
    }

    handleChange = (e) => {
        this.setState({task: e.target.value});
    }

    newTask = () => {
        this.props.addTask(this.state.task);
        this.setState({task: ''});
    }

    render() { 
        return (
            <div className="task">
                <input name="task" type="text" value={this.state.task}
                    onChange={this.handleChange}/>
                <button className="submit-btn" onClick={this.newTask}>Add Task</button>
            </div>
        )
    }
}
 
export default connect(null, {addTask})(NewTask);