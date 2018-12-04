import React from 'react';

const Todo = props => {
    return (
        <>
            <li><input type="checkbox" onClick={() => props.markComplete()} />{props.text}</li>
        </>
    );
};

export default Todo;