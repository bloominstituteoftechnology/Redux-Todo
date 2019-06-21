import React from 'react';

const TodoForm= props => {
    return (
        <div>
            <input
                type='text'
                placeholder="add item"
                name="item"
                onChange={props.handleTodoInput}
                value={props.item}
            />
            <button onClick={props.addItem}>Add item</button>
        </div>
    );
};

export default TodoForm;