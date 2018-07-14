import React from 'react';

const Todo = (props) => {
    return (
        <div>
            <li onClick={props.completedTodo}>{props.text}</li>
        </div>
    );
};

export default Todo;