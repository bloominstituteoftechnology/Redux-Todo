import React from 'react'

const Todo = ({ toggleTodo, completed, value }) => {
    return (
        <div
        onClick={toggleTodo}
        style={{ textDecoration: completed ? 'line-through' : 'none' }}
        >{value}</div>
    );
}


  export default Todo