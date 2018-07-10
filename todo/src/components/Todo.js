import React from 'react';

const Todo = (props) => {
    console.log('Todo Props: ', props)
    return (
        <div>
            <p>{props.todo.value}</p>
        </div>
    );
}
 
export default Todo;