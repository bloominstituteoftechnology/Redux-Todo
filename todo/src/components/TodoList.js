import React from 'react'
import {connect} from 'react-redux'
import {toggleComplete} from '../actions/actions.js'

const TodoList = (props) =>{

 

    if(!props.todos.length){
        return null
    }else {

        return (
          <ul>
              {props.todos.map(todo =>{
                  {console.log(todo)}
                  return <li 
                    style={{textDecoration: todo.completed ? 'line-through' : 'none'}}
                    key={todo.id} 
                    onClick={() => {props.toggleComplete(todo.id)}}>
                      {todo.value}
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


export default connect(mapStateToProps, {toggleComplete})(TodoList)
