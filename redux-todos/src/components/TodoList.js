// import React, { useContext } from 'react'
// import { TodoContext } from '../App'

import React from 'react'
import TodoItem  from './TodoItem'



export default function TodoList({todos, dispatch}) {
    // const todos = useContext(TodoContext)
    console.log(todos)

    return (
        <ul className="todo-list">
            {todos.map(function renderTodoItem(item, i) {
                return <TodoItem key={i} item={item} dispatch={dispatch} />
            })}
        </ul>
    )
}