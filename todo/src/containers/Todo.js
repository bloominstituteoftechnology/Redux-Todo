import React from 'react'

const Todo = ({ onClick, completed, value }) => (
    <li
        onClick={onClick}
        style={{
            textDecoration: completed ? 'line-through' : 'none'
        }}
    >
        {value}
    </li>
)

export default Todo