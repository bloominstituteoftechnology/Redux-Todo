import React from 'react';
import { connect } from 'react-redux';

function TodoList(props) {
    return (
        <div>
            <ul>
                {props.todos.map(todo => (
                    <li>{todo.value}</li>
                ))}
            </ul>
        </div>
    )
}

const mapStateToProps = state => ({
    todos: state 
})

export default connect(mapStateToProps)(TodoList);