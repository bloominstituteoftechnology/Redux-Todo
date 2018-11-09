import React from 'react';
import { connect } from 'react-redux'
import { addTodo, removeTodo, toggleTodo} from '../actions/actions'


const Todo = () => {
  return (
   <div>
   
   </div>
  )
}

const mapStateToProps = (state) => {
 return {todos: state.todos}
}


export default connect(mapStateToProps, { addTodo, removeTodo, toggleTodo})(Todo) 
