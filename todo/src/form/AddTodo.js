import React from 'react';
import { connect } from 'react-redux';
import { AddTodoAction } from '../redux/actions';

const AddTodo = ({dispatch}) => {
    let input;

    return (
        <div>
            <form onSubmit={e => {
                e.preventDefault();
                if (!input.value.trim()) {
                    return;
                }
                dispatch(AddTodoAction(input.value))
                    input.value = '';
            }}>
                <input ref={node => input = node} />
                <button type='submit'>
                    Add Todo
                </button>
            </form>
        </div>
    )
}

export default connect()(AddTodo);