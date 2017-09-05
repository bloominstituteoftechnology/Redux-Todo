import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'
import './AddTodo.css'

let AddTodo = ({ dispatch }) => {
  let input

  return (
    <div>
      <form onSubmit={e => {
        e.preventDefault()
        if (!input.value.trim()) {
          return
        }
        dispatch(addTodo(input.value))
        input.value = ''
      }}>
        <input 
          placeholder='what needs to be done?'
          ref={node => { input = node }} 
        />
      </form>
    </div>
  )
}
AddTodo = connect()(AddTodo)

export default AddTodo
