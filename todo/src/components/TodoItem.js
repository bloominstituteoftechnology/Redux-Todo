import React from 'react';

const TodoItem = props => {
    return (
        <form>
            <input
                name='newItem'
                onChange={props.changeHandler}
                placeholder='What to do?'
                type='text'
                value={props.newItem}
            />
            <button onClick={props.addTodo}>ADD</button>
        </form>
    );
}

export default TodoItem;