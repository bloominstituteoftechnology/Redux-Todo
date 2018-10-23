import React from 'react'

const TodoForm = props => {
    return (
        <div>
            <form onSubmit={props.addTask}>
                
                <input 
                type="text"
                placeholder="Add task"
                value={props.to}
                onChange={props.handleChangeEvent}
                />
                
                <button
                    onClick={props.addTask}
                    type="submit"
                >
                Add to List</button>
                
                <button
                    onClick={props.clearCompletedTasks}
                >
                Clear Completed Tasks
                </button>

            </form>
        </div>
    )
}

export default TodoForm