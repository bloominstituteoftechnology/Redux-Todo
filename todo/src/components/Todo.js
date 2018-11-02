import React from "react"
import { connect } from "react-redux"
import {addTodo} from '../actions/actions'


const Todo = props => {
 console.log(props)
    return <ul>{props.todos.map((todo, index) => (
        <div key={index}>
            {todo.todo}
        </div>
    ))}</ul>
}


const mapStateToProps = state => {
    return {todos: state.todos}
}


export default connect(mapStateToProps, {addTodo})(Todo);