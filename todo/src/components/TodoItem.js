import React from 'react';

const TodoItem = props =>  {
    return(
        <div onClick={() => props.toggle(props.id)}>
            <li className={props.todo.complete ? 'complete' : ''}>{props.todo.todo}</li>
        </div>
    )
}


export default TodoItem;