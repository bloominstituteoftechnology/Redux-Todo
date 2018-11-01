import React from 'react';

const ToDoList = () => {
    return(
        <div>
            {props.value.map( item => (
                <ToDoItem key={item.id} />
            ))}
        </div>
    )
}

export default ToDoList;