import React from "react"
import { connect } from "react-redux"
import { toggleTodo } from "../actions/actions";




const Todo = props => {
 console.log(props)
    return <ul>{props.todos.map((todo, index) => (
        <div key={index}>
            <h4 style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
            onClick={()=> this.props.toggleTodo(index)}>
                {todo.todo}
            </h4>
        </div>
    ))}</ul>
}


const mapStateToProps = state => {
    return {todos: state.todos}
}


export default connect(mapStateToProps, {toggleTodo})(Todo);