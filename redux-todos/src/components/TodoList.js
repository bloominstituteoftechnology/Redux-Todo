import React, { useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import TodoItem  from './TodoItem'

export default function TodoList(props) {
    const todos = useSelector(store => store.todos, [props.todos])
    return (
        <ul className="todo-list">
            {todos.map(function renderTodoItem(item, i) {
                return <TodoItem key={i} item={item} />
            })}
        </ul>
    )
}