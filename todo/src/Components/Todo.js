import React from 'react'
import TodoForm from './TodoForm'
import { connect } from 'react-redux'
import { toggleCompletion } from '../Actions/actionsIndex'

const Todo = props => {
    return (
        <div>
            <ul>
                <li onClick={() => props.toggleCompletion(props.todo.task)}>
                    {props.todo.task}
                </li>
            </ul>
        </div>
    )
}

const mapStateToProps = state => {
    return {}
}

export default connect(
    mapStateToProps, { toggleCompletion }
)(Todo)