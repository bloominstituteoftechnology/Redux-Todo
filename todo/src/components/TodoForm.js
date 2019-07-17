import React, { Component } from 'react';

    const TodoForm = props => {
        return (
            <form>
                <input 
                    type="text"
                    placeholder="Todo"
                    name="Todo"
                    onChange={props.handleInputChange}
                    value={props.todo}
                    />
                    <button onClick={}>Add Todo</button>
                    <button onClock={}>Clear Completed</button>
            </form>
        )
    }

export default TodoForm;