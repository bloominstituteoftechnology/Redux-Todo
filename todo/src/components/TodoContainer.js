import React from 'react';
import TodoCard from './TodoCard'
import { connect } from 'react-redux'
import { addTodo, removeTodo, toggleTodo, } from '../actions/actions'

class TodoContainer extends React.Component {
 constructor(){
  super()

  this.state = {
   task: ''
  }
 }

 inputHandler = event => {
  this.setState({
   [event.target.name]: event.target.value
  })
 }

 submitHandler = (event) => {
  console.log(this.props.id)
  event.preventDefault()
  this.props.addTodo({task: this.state.task, completed: false})
  this.setState({
   task: ''
  })
 }

 deleteTodo = (index) => {
  this.props.removeTodo(index)
 }

 toggleTodo = (index) => {
  this.props.toggleTodo(index)
 }
 render(){
  return(
  <div>
  <form onSubmit={this.submitHandler}>
   <input
   onChange={this.inputHandler}
    type="text"
    name="task"
    value={this.state.task}
   />
   <button type="submit">
   Add Todo
   </button>
  </form>
   <TodoCard deleteTodo={this.deleteTodo}
    toggleTodo={this.toggleTodo}
   />
  </div>
 )
 }
 
}

export default connect("",{addTodo, removeTodo, toggleTodo})(TodoContainer)