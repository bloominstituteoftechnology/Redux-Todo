import React from 'react';

const TodoItem = props =>  {
    return(
        <div className={props.todo.complete ? 'todo-item complete' : 'todo-item'} onClick={() => props.toggle(props.id)}>
            <button onClick={()=> props.delete(props.id)}>X</button>{props.todo.todo}
        </div>
    )
}


export default TodoItem;