import React from 'react'
import { Fragment } from 'react'
import './Styling/TodoList.css'
import { connect } from 'react-redux'
import Todo from './Todo'

export default function TodoList(props) {
    return (
        <Fragment>
            <ul>
                {props.todos.map((todo, index) => (
                    <li 
                        key={todo.index}
                        onClick={() => props.toggleCompletion(index)}
                    >
                        {todo.task}
                    </li>
                ))}
            </ul>
            
            <input 
                type="text"
                placeholder="Add task"
                value={props.input}
                onChange={props.handleChangeEvent}
            />
            
            <button
                onClick={props.addTask}
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
        </Fragment>
    )
}