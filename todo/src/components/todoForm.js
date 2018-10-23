import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTodo, deleteTodo } from '../actions/index';


class TodoForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            task: ''
        }
    }

    changeHandler = event => {
        this.setState({ [event.target.name]: event.target.value });
    };


    addNewTask = event => {
        event.preventDefault();
        const { task } = this.state;
        const newTask = { task, completed: false, id: Date.now() };
        this.props.addTodo(newTask);
        this.setState({ task: '' });

    };



    render() {
        return (
            <div className='task-input'>
                <input
                    onChange={this.changeHandler}
                    placeholder='add Todo'
                    name='task'
                    value={this.state.task} />
                <button className='addButton' onClick={this.addNewTask}>Add Task</button>
                <button className='deleteButton' onClick={this.props.deleteTodo}>Delete Completed</button>

            </div>
        )
    }
}

export default connect(null, { addTodo, deleteTodo })(TodoForm);