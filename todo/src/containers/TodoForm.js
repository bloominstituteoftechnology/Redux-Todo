import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions';

class TodoForm extends Component {
    constructor() {
        super();
        this.state = {
            todos: [],
            completed: false
        }
    }

    createTodo = e => {
        this.props.addTodo(this.state.todos);
        this.setState({ todos: '' });
    }

    handleChange = e => {
        this.setState({ todos: e.target.value})
    }

    render() {
        return(
        <div>
            <input 
                name='todo' 
                type='text' 
                value={this.state.todos} 
                onChange={this.handleChange} 
            />
            <button onClick={this.createTodo}>More Work!</button>
        </div>
        )}
}

export default connect(null, { addTodo })(TodoForm);