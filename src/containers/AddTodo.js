import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'
import './AddTodo.css';

let AddTodo = ({ dispatch }) => {
  let input

  return (
    <div className="todo-input-div">
      <form
        onSubmit={e => {
          e.preventDefault()
          if (!input.value.trim()) {
            return
          }
          dispatch(addTodo(input.value))
          input.value = ''
        }}
      >
        <input className="todo-input-bar"
          ref={node => {
            input = node
          }}
        />
        <button className="submit-btn" type="submit">
          Add Todo
        </button>
      </form>
    </div>
  )
}
AddTodo = connect()(AddTodo)

export default AddTodo
