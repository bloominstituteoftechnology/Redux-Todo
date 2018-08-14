import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions/actions';

const TodoInput = props => {
  return(
    <input
      type="text"
      placeholder="Enter todo item"
      onKeyPress={event => {
        if(event.key==='Enter' && event.target.value !== ''){
          props.addTodo(event.target.value);
          event.target.value='';
        }
      }}
    />
  );
}

export default connect(null, { addTodo })(TodoInput);