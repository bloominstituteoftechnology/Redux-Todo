import React, { useState } from 'react'
import uuid from 'uuid'

import { addTodo } from '../store/actions'



export default function TodoForm({dispatch}) {
    const [newTodo, setNewTodo] = useState([])

    function handleSubmit(evt) {
        evt.preventDefault()

        dispatch(addTodo({
            id: uuid(),
            task:newTodo,
            complete:false
        }))

        setNewTodo('')
    }
    
    function handleChange(evt) {
        setNewTodo(evt.target.value)
    }

    return (
        <form className="todo-form" onSubmit={handleSubmit}>
            <input 
                type="text" 
                placeholder="Enter a new todo item"
                onChange={handleChange}
                value={newTodo}
            />
            <button role="submit">+</button>
        </form>
    )
}