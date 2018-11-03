import React, { Component } from 'react';
import { connect } from 'react-redux';
import { grabTodos, addTodo, removeTodos, toggleTodo } from '../actions'

class TodoList extends Component {
    constructor() {
        super();
        this.state = {
            input: '',
        }
    }

    render() {
        return (
            <div>
                <form>

                </form>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        todos: state.todos
    }
}

export default connect(mapStateToProps, {
    grabTodos,
    addTodo,
    removeTodos,
    toggleTodo
})(TodoList);