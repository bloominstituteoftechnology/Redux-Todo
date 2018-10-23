import React from 'react';

class TodoForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            taskInput: ''
        };
    }

    changeHandler = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    submitHandler = (event) => {
        event.preventDefault();
        if (this.state.taskInput) {
            console.log(this.props.addTask);
            this.props.addTask(this.state.taskInput);
            this.setState({
                taskInput: ''
            })
        }
    }

    render() {
        return (
            <form onSubmit={(event) => this.submitHandler(event)} >
                <input
                    type="text"
                    name="taskInput"
                    onChange={this.changeHandler}
                    placeholder="Enter new task"
                    value={this.state.taskInput}
                />
                <input type="submit" />
            </form>
        )
    }
}

export default TodoForm;