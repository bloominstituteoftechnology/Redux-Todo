import React from 'react';

const TodoList = (props) => {
    console.log(props);
    return (
        <div className='TodoList'>
            {props.task.map((aTask) => {
                return(<div>{aTask}</div>)
            })}
        </div>
    );
}

export default TodoList;