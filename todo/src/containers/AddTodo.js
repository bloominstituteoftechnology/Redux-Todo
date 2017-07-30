import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions';
import '../css/AddTodo.css';

let AddTodo = ({ dispatch }) => {
  let input;

  return (
    <div className="main">
      <form
        onSubmit={event => {
          event.preventDefault()
          if (!input.value.trim()) {
            return
          }
          dispatch(addTodo(input.value))
          input.value = ''
        }}
      >
        <input
          className="input"
          placeholder='Got something to do? e.g. "Dust all the MyLittlePony statues on the credenza."'
          ref={node => {
            input = node
          }}
        />
        <button
          className="button"
          type="submit">
          Add a "To Do" item to the list!
        </button>
      </form>
    </div>
  )
}

AddTodo = connect()(AddTodo);

export default AddTodo;
