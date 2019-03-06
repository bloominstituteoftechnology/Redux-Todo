import React, { Component } from 'react'
import { connect } from 'react-redux';
import Todo from './Todo';

import './TodoList.css';

class TodoList extends Component {
    render() {

        if (this.props.todos.length === 0) {
            return <h1 className="todo-list-heading">Enter something to-do :)</h1>
        }

        return (
            <div className="todo-list">
                <h1 className="todo-list-heading">To-do list</h1>

                {this.props.todos.map(todo => (
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
