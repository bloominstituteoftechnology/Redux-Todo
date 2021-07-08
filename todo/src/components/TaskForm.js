import React, { Component } from "react";

class TaskForm extends Component {
    constructor() {
        super();
        this.state = {
            newTaskText: '',
        };
    }

    handleInputChange = event => {
        this.setState({ newTaskText: event.target.value })
    }

    render() {
        return (
            <div>
                <form onSubmit={() => this.props.addTask()}>
                    <input 
                        type='text' 
                        placeholder='Add a task' 
                        value={this.state.newTaskText} 
                        onChange={this.handleInputChange}
                    />
                    <input type='submit'/>
                </form>
            </div>
        )
    }
}

export default TaskForm;