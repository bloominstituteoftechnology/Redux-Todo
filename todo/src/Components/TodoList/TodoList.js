import React from 'react'
import Todo from './todo'


const TodoList = ({ todos, toggleTodo}) => {
    <ul>
        {todos.map(todo => (
            <Todo key = {todo.id} onClick= {() => toggleTodo (todo.id)} />
        ))}
    </ul>
}

export default TodoList;