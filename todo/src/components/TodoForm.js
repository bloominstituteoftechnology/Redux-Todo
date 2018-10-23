import React from 'react'


const TodoForm = props => {
    return (
        <div>
            <button onClick={props.addTodoList}>Add Todo</button>
            <input 
                type="text" 
                name="todoText" 
                value={props.todoText}
                onChange={props.changeHandler} />
        </div>
    )
}

export default TodoForm