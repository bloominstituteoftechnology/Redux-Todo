import React from 'react';

const TodoList = (props) => {
    return (
        <div className="todo-container">
            { props.todos.map((todo) => {
                return (
                    <li
                        onClick={() => props.toggleTodo(todo.id)}
                        key={todo.id}
                        style={{ textDecoration: todo.completed ? 'line-through' : 'none'}}
                    >
                        {todo.text}
                    </li>
                )
            })}
        
        </div>
    )
}