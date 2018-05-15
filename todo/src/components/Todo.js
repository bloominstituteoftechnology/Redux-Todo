import React from 'react'

const ToDo = props => {
    return (
    <div>
        <input
        name="todo"
        value={props.todo}
        type="text"
        onChange={props.handleChange}
        placeholder="Add item"
    />
    <button onClick={props.addToDo}> Add Todo </button>
    </div>
    )
}
export default ToDo