import React from 'react';
import { connect } from "react-redux";
import { toggleComplete, deleteTodo } from "../actions"

const Todo = props => {
    return (
        <div>
            <ul>
            <li onClick={() => props.toggleComplete(props.todo.value, props.todo.completed, props.id)}
                >
                {props.todo.value}
                </li>
            </ul>
                <button onClick={e => props.deleteTodo(e, props.id)}>Delete</button>
        </div>
    )
}

const mapStateToProps = state => {
    return {

    };
}

export default connect(mapStateToProps, {toggleComplete, deleteTodo})(Todo)