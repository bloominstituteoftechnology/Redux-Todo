import React, { Component } from 'react'
import Todo from './Todo';

import { connect } from 'react-redux';

class TodoList extends Component {
    render() {
        return (
            <div>
                {this.props.todos.map(todo => (
                    <Todo todo={todo} />
                ))}
            </div>
        )
    }
}

const mapStateToProps = state => ({
    todos: state.todosList.todos
})

export default connect(mapStateToProps, {})(TodoList);
