import React from 'react';

const TodoItem = props => {
    return (
        <div onClick={() => props.toggle(props.id)}>
            <div className={props.todo.complete ? 'todo-item complete' : 'todo-item'} 
                onClick={() => props.toggle(props.id)}>
                {props.todo.todo}
                <button onClick={() => props.delete(props.id)}>Delete</button>
            </div>
        </div>
    )
}

export default TodoItem;