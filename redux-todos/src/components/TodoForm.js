import React, { useState } from 'react'


export default function TodoForm(props) {
    const [newTodo, setNewTodo] = useState([])

    function handleSubmit(evt) {
        evt.preventDefault()
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
            />
            <button role="submit">+</button>
        </form>
    )
}