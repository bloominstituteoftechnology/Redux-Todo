import React from 'react';
import { connect } from 'react-redux';
import { deleteTodo } from '../actions/';
import '../styles/Todo.css';


let RemoveTodo = ({id, dispatch}) => {
  return (
    <div>
      <button 
      className="button"
      onClick={e => {
        e.preventDefault()
        dispatch(deleteTodo(id));
      }}>Delete</button>
    </div>
  )
}

RemoveTodo = connect()(RemoveTodo)

export default RemoveTodo;