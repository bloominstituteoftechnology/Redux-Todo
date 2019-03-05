import React, { Component } from 'react'
import { connect } from 'react-redux';
import Todo from './Todo';

import './TodoList.css';

class TodoList extends Component {
    render() {

        if (this.props.todos.length === 0) {
            return <h1 className="todo-list-heading">Enter something todo :)</h1>
        }

        return (
            <div className="todo-list">
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
