import React from 'react';
import { connect } from 'react-redux';

function Todos(props) {
    return (
        <div>
            <ul>
                {props.todos.map((todo, index) => {
                    return (
                        <li key={index}>{todo.todo}</li>
                    )
                })}
            </ul>
        </div>
    )
}

const mstp = state => {
    return {
        todos: state.todos
    }
}

export default connect(mstp)(Todos);