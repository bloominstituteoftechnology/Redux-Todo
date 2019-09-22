import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions';
import '../styles/AddTodo.css';

let AddTodo = ({ dispatch }) => {
  let input

  return (
    <div className="todoForm-container">
      <form 
      onSubmit={e => {
        e.preventDefault()
        if (!input.value.trim()) {
          return
        }
        dispatch(addTodo(input.value))
        input.value = ''
      }}>
        <input className="todoForm" ref={node => {
          input = node
        }} />
        <button
        className="todoForm-button" 
        type="submit">
          Add Todo
        </button>
      </form>
    </div>
  )
}
AddTodo = connect()(AddTodo)

export default AddTodo;