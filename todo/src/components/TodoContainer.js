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
  event.preventDefault()
  this.props.addTodo({task: this.state.task, completed: false})
  this.setState({
   task: ''
  })
 }

 deleteTodo = (id) => {
  this.props.removeTodo(id)
 }

 toggleTodo = (id) => {
  this.props.toggleTodo(id)
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
   <button type="submit">
    Toggle Todo
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