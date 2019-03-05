import React, { Component } from 'react'
import { connect } from 'react-redux';
import { addTodo } from '../actions/todoActions';

class AddTodo extends Component {
    state = {
        todoText: '',
    }

    onChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    addTodo = e => {
        e.preventDefault();

        this.props.addTodo(this.state.todoText)

        this.setState({
            todoText: ''
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.addTodo}>
                    <input type="text" name="todoText" onChange={this.onChange} value={this.state.todoText} placeholder="Enter todo..." />
                    <button type="submit">Add Todo</button>
                </form>
            </div>
        )
    }
}

export default connect(null, { addTodo })(AddTodo);
