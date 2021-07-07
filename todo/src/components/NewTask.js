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
        this.setState({task:''});
    }

    render() { 
        return (
            <div className="new-task">
                <form onSubmit={this.newTask}>
                    <input name="task" type="text" placeholder="new task" value={this.state.task}
                        onChange={this.handleChange}/>
                    <button className="submit-btn">Add Task</button>
                </form>
            </div>
        )
    }
}
 
export default connect(null, {addTask})(NewTask);