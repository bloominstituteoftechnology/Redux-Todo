import React from 'react'
import {connect} from 'react-redux'
import {removeTodo} from '../actions/actions.js'

const TodoList = (props) =>{
    if(!props.todos.length){
        return null
    }else {

        return (
          <ul>
              {props.todos.map(todo =>{
                  return <li key={todo.id}>
                      {todo.todoText}
                  </li>
              })}
          </ul>
        )
    }
}

const mapStateToProps = state => {
    return {
        todos: state.todos

    }
}


export default connect(mapStateToProps, {removeTodo})(TodoList)
