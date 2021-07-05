import React from 'react';

import { Form, Input, Submit } from '../styles/TodoForm';

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
            <Form onSubmit={(event) => this.submitHandler(event)} >
                <Input
                    type="text"
                    name="taskInput"
                    onChange={this.changeHandler}
                    placeholder="Enter new task"
                    value={this.state.taskInput}
                />
                <Submit type="submit" />
            </Form>
        )
    }
}

export default TodoForm;