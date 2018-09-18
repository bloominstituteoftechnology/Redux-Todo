import React from 'react';
import { connect } from 'react-redux';
import { add_todo, delete_completed } from '../actions'

const SubmitForm = props => {
  return (
  <form onSubmit={ e =>
    {e.preventDefault()
      props.add_todo(props.value)
      props.reset()
    }}>
    <input
      type='text'
      value={props.value}
      placeholder='new task...'
      onChange={props.inputChange}></input>
    <input type='submit' value='Add Task'></input>
    <button onClick={props.delete_completed}>Delete Completed</button>
  </form>
  )}

  const mapStateToProps = (state) => {
    return {
      todos: state
    }
  }

export default connect(mapStateToProps, {add_todo, delete_completed})(SubmitForm)
