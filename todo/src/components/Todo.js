import React from 'react';
import { connect } from 'react-redux'
import { addTodo, removeTodo, toggleTodo} from '../actions/actions'


const Todo = props => {
  return (
   <div>
   {props.todos.map((todo, index) => <div key={index}>
    {todo.task}
   </div>)}
   </div>
  )
}

const mapStateToProps = (state) => {
 return {todos: state.todos}
}


export default connect(mapStateToProps, { addTodo, removeTodo, toggleTodo})(Todo) 
