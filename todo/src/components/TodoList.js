import React from 'react';
import { connect } from 'react-redux'
import { todoToggle } from '../actions'

const strikeout = { textDecoration: 'line-through'}
const ToDoList = props => {
    return (
        <div>
                <ul>
                    {props.todos.map(todo => (
                    <li
                        key={todo.id}
                        style={todo.completed ? strikeout : null}
                        onClick={() => props.todoToggle(todo.id)}>
                    {todo.text}
                    </li>
                    ))}
                    </ul>
        </div>
    )
}


export default connect(null, { todoToggle })(ToDoList)

