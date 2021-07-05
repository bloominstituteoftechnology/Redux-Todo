import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions/actions';

const TodoInput = props => {

    function submit (event) {
        if(event.key==='Enter' && event.target.value !== ''){
            props.addTodo(event.target.value);
            event.target.value='';
          }
    }

  return(
      <div>
    <input
      type="text"
      placeholder="Enter todo item"
      onKeyPress={submit}
    />
    </div>
  );
  
}

export default connect(null, { addTodo })(TodoInput);