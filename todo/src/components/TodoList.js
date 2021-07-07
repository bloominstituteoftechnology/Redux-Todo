import React, { Component } from 'react';
import Todo from './Todo';
import { connect } from 'react-redux';
import { createTodo } from '../actions';

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newTodo: ''
        };
    }

    handleOnChange = event => {
        this.setState({ [event.target.name]: event.target.value })
    }

    addTodo = () => {
        this.props.createTodo(this.state.newTodo);
        this.setState({ newTodo: "" });
    }

    render() {
        return (
            <div>
                <input type="text" name="newTodo" value={this.state.newTodo} placeholder="Enter a new todo item" onChange={this.handleOnChange} /><br /><br />
                <button onClick={this.addTodo}>Click to add a new todo</button>
                <h2>To Do List</h2>
                <Todo todo={this.props.todos} />
            </div>
        )
    }
}



export default connect(null, { createTodo })(TodoList); 
