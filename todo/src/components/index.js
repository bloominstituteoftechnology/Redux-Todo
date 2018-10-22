import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { addTodo } from "../actions"

class Todo extends Component {
    constructor() {
        super();
        this.state = {
            inputText: ''
        }
    }

    handleChange = e => {
        this.setState({[e.target.name]: e.target.value})
    }

    render() {
        return (
            <Fragment>
            <div>{this.props.todos.map(todo => <h3>{todo.value}</h3>)}</div>
            <input 
            type="text"
            placeholder="Add todo"
            name="inputText"
            value={this.state.inputText}
            onChange={this.handleChange}
            />
            </Fragment>
        )
    }

}

const mapStateToProps = state => {
    return {
        todos: state.todos
    }
}

export default connect(mapStateToProps, addTodo)(Todo)
