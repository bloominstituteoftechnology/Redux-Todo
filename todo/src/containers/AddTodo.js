import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions';

let AddTodo = ({ dispatch }) => {
  let input;
  return (
    <div>
      <form onSubmit={e => {
        e.preventDefault()
        dispatch(addTodo(input.value))
        input.value = ''
      } }>
        <input ref={val => {
          input = val
        }} />
        <button type="submit">
          Add Item
        </button>
      </form>
    </div>
  )
}

export default connect()(AddTodo);
