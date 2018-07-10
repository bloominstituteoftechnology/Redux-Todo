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
            <button type="submit">Add Todo</button>
            <button onClick={props.handleClear}>Clear Completed</button>
        </form>
    );
};

export default TodoForm;