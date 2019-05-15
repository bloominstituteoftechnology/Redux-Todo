import React, { useState } from 'react'
import uuid from 'uuid'

import { addTodo } from '../store/actions'



export default function TodoForm(props) {
    const [newTodo, setNewTodo] = useState([])

    function handleSubmit(evt) {
        evt.preventDefault()
        props.dispatch(addTodo({
            id: uuid(),
            content:newTodo,
            completed:false
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