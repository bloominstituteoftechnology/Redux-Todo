import React from 'react'
import {connect} from 'react-redux'
import {addTodo} from '../actions'

const AddTodo = ({addTodo}) => {

  let value = ''

  const submitHandler = (e) => {
    e.preventDefault()
    if (value) {
      addTodo(value)
      e.target.reset()
      value = ''
    }
  }

  const changeHandler = (e) => {
    value = e.target.value
  }

  return (
    <form onSubmit={submitHandler}>
      <input type="text" onChange={changeHandler}/>
      <input type="submit" value="Submit"/>
    </form>
  )
}

export default connect(null, {addTodo})(AddTodo)
