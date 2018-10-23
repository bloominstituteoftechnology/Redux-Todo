import React from 'react';
import { AddTodo } from '../actions'

function AddTodoForm(props) {
    return (
        <div>
            <form>
                <input placeholder='This is a placeholder.' />
                <button>Add Todo</button>
            </form>
        </div>
    )
}


export default AddTodoForm;