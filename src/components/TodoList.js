import React, { Component } from 'react'
import Todo from './Todo';

import { connect } from 'react-redux';

class TodoList extends Component {
    render() {
        return (
            <div>
                {this.props.todos.sort((a, b) => b.id - a.id).map(todo => (
                    <Todo key={todo.id} todo={todo} />
                ))}
            </div>
        )
    }
}

const mapStateToProps = state => ({
    todos: state.todosList.todos
})

export default connect(mapStateToProps, {})(TodoList);
