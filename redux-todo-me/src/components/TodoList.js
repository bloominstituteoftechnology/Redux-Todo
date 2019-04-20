import React from 'react'

const TodoList = ({ todos, toggleTodo }) => (
    <div>
        {todos.map(todo => 
            <button key={todo.id} onClick={() => toggleTodo(todo.id)}>
            </button> 
        )}
    </div>
)

export default TodoList;