import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions';

const AddTodo = ({dispatch}) => {
    let input;

    return (
        <div>
            <form onSubmit={event => {
                event.preventDefault();
                dispatch(addTodo(input.value));
                input.value = '';
            }}>
            <input type = 'text' placeholder='New task' ref={node => input = node}></input>
            <button type = 'submit'>Add Todo</button>
            </form>
            
        </div>
    )
}

export default connect()(AddTodo);