import React from 'react'


const Todo = ({ toggleTodo, completed, value, deleteTodo, id }) => {
    return (
        <div onClick={toggleTodo}
             style={{ textDecoration: completed ? 'line-through' : 'none' }}>
        {value}
        <button onClick={() => deleteTodo(id)}>Delete</button>
        </div>
    );
}
   export default Todo 