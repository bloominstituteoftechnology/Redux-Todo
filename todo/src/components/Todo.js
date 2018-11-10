import React from 'react';
import { connect } from 'react-redux'
import { addTodo, removeTodo, toggleTodo} from '../actions/actions'


const Todo = props => {
 console.log('props.todos is: ',props.todos)
 //obj should be arr
  return (
   <div>
   {props.todos.map((todo, index) => <div key={index}>
    {todo.task}
   </div>)}
   </div>
  )
}

const mapStateToProps = (state) => {
 console.log("State is: ",state)
 return {todos: state}
}


export default connect(mapStateToProps, { addTodo, removeTodo, toggleTodo})(Todo) 
