import React from 'react';

const TodoForm = props => (
    <form onSubmit={props.addNewTodo}>
        <input
            type='text'
            name='inputText'
            placeholder='New todo'
            value={props.inputText}
            onChange={props.handleInputChange}
        />
        <input type='submit' onClick={props.addNewTodo} />

    </form>
)

export default TodoForm;