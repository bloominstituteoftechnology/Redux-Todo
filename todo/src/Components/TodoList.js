import React from 'react'
import './Styling/TodoList.css'
import { connect } from 'react-redux'
import Todo from './Todo'

const TodoList = props => {
    return (
        <div>
            <h1>To Do List:</h1>
            {props.todosArray.map((todo, index) => 
                <Todo 
                    todo={todo}
                    key={index}
                />
            )}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        todosArray: state.todosArray
    }
}

export default connect(mapStateToProps, {})(TodoList)