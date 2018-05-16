import React from 'react'
import { connect } from 'react-redux'
import { toggleTodo } from '../actions'

const Todo = props => {  console.log('Todo props', props)
    return (
      
        <div>
            {props.todos.map(todo => {
            return (
                <div key={todo.id}>
                    <li
                        onClick={() => props.toggleTodo(todo.id)}
                        style={ {
                            textDecoration: todo.complete ? 'line-through' : 'none'
                        }}
                        name="todo"
                        value={todo.complete}>
                        {todo.text}
                    </li>
            
                </div>)})}
        </div>
    )

}
const mapStateToProps = state => {
    return {
        todos: state.todos
    }
}

export default connect(mapStateToProps, { toggleTodo })(Todo)