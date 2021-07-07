import React from 'react'
import './Todo.css'

const TodoForm = props => {
    return (
        <div>
            <button className="addBtn" onClick={props.addTodoList}>Add Todo</button>
            <input
                placeholder="Add your todo.." 
                type="text" 
                name="todoText" 
                value={props.todoText}
                onChange={props.changeHandler} />
        </div>
    )
}

export default TodoForm