import React from 'react';

import './Todo.css';

const TodoForm = props => {
    return (
        <div className="todoForm">
            <form onSubmit={props.handleSubmit}>
                <input
                    type='text'
                    placeholder='Add Todo'
                    value={props.value}
                    onChange={props.handleChange}
                />
                <button type="submit">Add Todo</button>
            </form>
        </div>
    );
};

export default TodoForm;