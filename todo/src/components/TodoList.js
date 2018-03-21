import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTodo, deleteTodo } from '../actions';

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleClick(id) {
    }

    handleChange(event) {
        this.setState({
            text: event.target.value
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.addTodo(this.state.text);
        this.setState({
            text: ''
        })
    }

    render() {
        return (
            <div>
                <h1>Todo List</h1>
                <div>{this.props.todos.map(todo => {
                    return (
                    <div>
                    <p key={todo.id} onClick={() => this.handleClick() }>{todo.text}</p>
                    <button onClick={() => this.props.deleteTodo(todo.id) }>X</button>
                    </div>
                    )
                })}</div>
                <form onSubmit={this.handleSubmit}>
                    <input placeholder="Do something!" onChange={this.handleChange} type="text" value={this.state.text} />
                    <input type="submit" />
                </form>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        todos: state.todos
    };
}

export default connect(mapStateToProps, { addTodo, deleteTodo })(TodoList);