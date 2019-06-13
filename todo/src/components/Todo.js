import React from 'react';
import { connect } from 'react-redux';
import { removeTodo } from '../actions/index';

const Todo = (props) => {
    const removeCompleted = () => {
        props.removeTodo(props.todo)
    }
}

return (
    <div>
        <p>{props.todo}</p>
        <button onClick={removeCompleted}></button>
)

export default connect(
    mapStateToProps,
    { deleteTodo }
)(Todo);