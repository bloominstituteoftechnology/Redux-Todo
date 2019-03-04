import React, { Component } from 'react'
import Todo from './Todo';

import { connect } from 'react-redux';
import { fetchTodos } from '../actions/todoActions';

class TodoList extends Component {
    render() {
        return (
            <div>
                {this.props.todos.todos.map(todo => (
                    <Todo />
                ))}
                {console.log(this.props.todos)}
            </div>
        )
    }
}

const mapStateToProps = state => ({
    todos: state.todos
})

export default connect(mapStateToProps, { fetchTodos })(TodoList);
