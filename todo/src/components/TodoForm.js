import React from 'react';

const TodoForm = props => {
    return (
        <form onSubmit={props.handleSubmit}>
            <input
                type='text'
                placeholder='Add Todo'
                value={props.value}
                onChange={props.handleChange}
            />
        </form>
    );
};

export default TodoForm;