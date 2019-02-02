import React from 'react';
import { connect } from 'react-redux';

const Todos = props => {
    // console.log(props)
    return (
        <div>
            <ul>
                {props.todos.map((todo, index) => {
                    return (
                        <li key={index}>
                            {todo.todo} {todo.completed.toString()}
                        </li>
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