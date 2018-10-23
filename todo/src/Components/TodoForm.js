import React from 'react'
import { connect } from 'react-redux'
import { addTask, clearCompletedTasks, handleChangeEvent } from '../Actions/actionsIndex'

const TodoForm = props => {
    return (
        <div>
            <form onSubmit={props.addTask}>

                <input 
                    type="text"
                    placeholder="Add task"
                    value={props.todo}
                    onChange={props.handleChangeEvent}
                />
                
                <button
                    onClick={event => {
                        props.addTask(event, props.todo)
                    }}
                    type="submit"
                >
                Add to List</button>
                
                <button
                    onClick={event => {
                        props.clearCompletedTasks(event, props.id)
                    }}
                >
                Clear Completed Tasks
                </button>

            </form>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        todo: state.todo
    }
}

export default connect(mapStateToProps, { addTask, clearCompletedTasks, handleChangeEvent })(TodoForm)