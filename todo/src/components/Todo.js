import React from 'react';
import { connect } from 'react-redux';
import { deleteTodo } from '../actions';

const Todo = (props) => {
    const toggleComplete = () => {
        props.deleteTodo(props.todo)
    }

    return (
        <div className="todo-item">
            <button className="delete-todo" onClick={toggleComplete}>x</button>
            <p className="todo-content">{props.todo}</p>
        </div>
    )
}

export default connect(null, { deleteTodo })(Todo);